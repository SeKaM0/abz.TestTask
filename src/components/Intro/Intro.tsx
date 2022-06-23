import React from 'react';

export const Intro: React.FC = () => {
  return (
    <section className="intro">
      <div className="intro__content">
        <h1 className="intro__title">Test assignment for front-end developer</h1>
        <p className="intro__subtitle">
          What defines a good front-end developer is
          one that has skilled knowledge of HTML, CSS, JS
          with a vast understanding of User design thinking
          as they&apos;ll be building web interfaces with accessibility in mind.
          They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <a href="#signUp" className="intro__button button">
          Sign up
        </a>
      </div>
    </section>
  );
};
