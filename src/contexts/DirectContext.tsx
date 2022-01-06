import React, { createContext, useCallback, useMemo } from 'react';
import { equalTo, get, orderByChild, query, ref } from 'firebase/database';
import { database } from '../services/firebase';
import { SingleUser } from '../@types/user';

interface DirectState {
  searchPersonsByEmail: (email: string) => Promise<SingleUser[]>;
}

const DirectContext = createContext<DirectState>({} as DirectState);

const DirectProvider: React.FC = ({ children }) => {
  const searchPersonsByEmail = useCallback(
    async (email: string): Promise<SingleUser[]> => {
      const userRef = ref(database, 'users');

      const users = query(userRef, orderByChild('email'), equalTo(email));

      const userSnapshot = await get(users);

      const user: SingleUser[] = [];

      userSnapshot.forEach(_user => {
        user.push(_user.val());
      });

      return user;
    },
    [],
  );

  const value = useMemo(
    () => ({ searchPersonsByEmail }),
    [searchPersonsByEmail],
  );

  return (
    <DirectContext.Provider value={value}>{children}</DirectContext.Provider>
  );
};

const useDirect = (): DirectState => {
  const context = React.useContext(DirectContext);

  if (!context)
    throw new Error('useDirect must be used within an DirectProvider');

  return context;
};

export { DirectProvider, useDirect };
export type { DirectState };
