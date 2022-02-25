import React from 'react';
import Head from './Helper/Head';
import Loading from './Helper/Loading';
import Feed from './User/Feed/Feed';
const Home = () => {
  return (
    <>
      <section className="container mainContainer">
        <Head title="Fotos " />
        <Feed />
      </section>
    </>
  );
};

export default Home;
