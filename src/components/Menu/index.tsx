import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import SearchPersons from '../SearchPersons';

import { Container, Profile, Search, Persons } from './styles';

const Menu: React.FC = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Profile>
        <img src={user.photoURL || ''} alt="Profile" />
        <div className="info">
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
      </Profile>
      <Search>
        <FaSearch />
        <input
          type="email"
          placeholder="Procurar email"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Search>
      <Persons>
        {search.length ? <SearchPersons search={search} /> : <h1>nada ;c</h1>}
      </Persons>
    </Container>
  );
};

export default Menu;
