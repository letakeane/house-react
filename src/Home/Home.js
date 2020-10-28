import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h1>T&nbsp;h&nbsp;e&nbsp;&nbsp;&nbsp;H&nbsp;o&nbsp;u&nbsp;s&nbsp;e</h1>
      <p><i>by Leta Keane</i></p>
      <Link to="/beginning" className="begin">Begin</Link>
    </section>
  )
}

export default Home;