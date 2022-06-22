import React, { useEffect, useState } from 'react';
import './styles/main.scss';
import { Intro } from './components/Intro/Intro';
import { Header } from './components/Header/Header';
import { DevelopersList } from './components/DevelopersList/DevelopersList';
import { getData, getPositions } from './api/api';
import { Form } from './components/Form/Form';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [nextPage, setNextPage] = useState<string>('');
  const [userPosition, setUserPosition] = useState<Position[] | null>(null);

  const getUserPositions = async () => {
    const gettingPositions: Position[] = await getPositions();

    setUserPosition(gettingPositions);
  };

  const getUsers = async () => {
    if (!users) {
      const gettingUsers: Data = await getData();

      setUsers(gettingUsers.users);
      setNextPage(gettingUsers.links.next_url);
    } else {
      const gettingUsers: Data = await getData(nextPage);

      setUsers([
        ...users,
        ...gettingUsers.users,
      ]);
      setNextPage(gettingUsers.links.next_url);
    }
  };

  const showMore = () => {
    getUsers();
  };

  const updateUsers = async () => {
    const gettingUsers: Data = await getData();

    setUsers(gettingUsers.users);
    setNextPage(gettingUsers.links.next_url);
  };

  useEffect(() => {
    getUsers();
    getUserPositions();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Intro />
        {users && <DevelopersList users={users} showMore={showMore} nextPage={nextPage} />}
        {userPosition && <Form positions={userPosition} updateUsers={updateUsers} />}
      </div>
    </>
  );
};
