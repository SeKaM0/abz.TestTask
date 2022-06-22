import React from 'react';

type Props = {
  users: User[],
  showMore: () => void,
  nextPage: string
};

export const DevelopersList: React.FC<Props> = ({ users, showMore, nextPage }) => {
  return (
    <section className="devs">
      <h1 className="devs__title">Working with GET request</h1>
      <div className="devs__list">
        {users.map(user => (
          <div className="devs__card card" key={user.id}>
            <img src={user.photo} alt={user.name} className="card__image" />
            <p className="card__title">{user.name}</p>
            <div className="card__subtitle">
              <p className="card__position">{user.position}</p>
              <p className="card__email">{user.email}</p>
              <p className="card__phone">{user.phone}</p>
            </div>
          </div>
        ))}
      </div>
      {nextPage && (
        <button type="button" className="devs__button button" onClick={() => showMore()}>
          Show more
        </button>
      )}
    </section>
  );
};
