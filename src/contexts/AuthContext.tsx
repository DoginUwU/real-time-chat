import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User as FirebaseUser,
} from 'firebase/auth';
import {
  push,
  ref,
  query,
  orderByChild,
  equalTo,
  get,
} from 'firebase/database';
import { auth, database } from '../services/firebase';
import { User } from '../@types/user';

interface AuthState {
  user: User;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthState>({} as AuthState);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);

  const handleUser = async (firebaseUser: FirebaseUser): Promise<void> => {
    if (!firebaseUser) return;
    const authUser = firebaseUser;

    if (!authUser.displayName || !authUser.photoURL)
      throw new Error('Informações de usuário faltando.');

    const userRef = ref(database, 'users');

    const checkUser = query(
      userRef,
      orderByChild('email'),
      equalTo(authUser.email),
    );

    await get(checkUser).then(snapshot => {
      if (snapshot.val()) return;
      push(userRef, {
        uid: authUser.uid,
        name: authUser.displayName,
        email: authUser.email,
        photoURL: authUser.photoURL,
      });
    });

    setUser(authUser);
  };

  const signIn = useCallback(async (): Promise<void> => {
    if (user.uid) return;
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      await handleUser(result.user);
    } catch (error) {
      throw new Error('Usuário não autenticado.');
    }
  }, [user.uid]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, firebaseUser => {
      if (firebaseUser) {
        handleUser(firebaseUser);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = useMemo(() => ({ user, signIn }), [user, signIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthState => {
  const context = React.useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};

export { AuthProvider, useAuth };
export type { AuthState };
