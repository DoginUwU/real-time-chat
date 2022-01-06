import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Person from '../Person';

import { Container, Profile, Search, Persons } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Profile>
        <img
          src="https://i.pinimg.com/564x/ba/f1/c1/baf1c11f0d1fd0a510e1259f586ce003.jpg"
          alt="Profile"
        />
        <div className="info">
          <h2>Luiz</h2>
          <p>doginuwu@gmail.com</p>
        </div>
      </Profile>
      <Search>
        <FaSearch />
        <input placeholder="Procurar" />
      </Search>
      <Persons>
        <Person />
      </Persons>
    </Container>
  );
};

export default Menu;
