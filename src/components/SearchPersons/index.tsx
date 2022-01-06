/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { SingleUser } from '../../@types/user';
import { useDirect } from '../../contexts/DirectContext';
import Person from '../Person';

interface Props {
  search: string;
}

const SearchPersons: React.FC<Props> = ({ search }) => {
  const { searchPersonsByEmail } = useDirect();
  const [users, setUsers] = useState<SingleUser[]>([]);

  useEffect(() => {
    searchPersonsByEmail(search).then(res => {
      setUsers(res);
    });
  }, [search]);

  return (
    <>
      {users.map(user => (
        <Person key={user.uid} user={user} />
      ))}
    </>
  );
};

export default SearchPersons;
