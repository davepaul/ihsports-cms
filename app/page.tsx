// If used in Pages Router, is no need to add this line
import React from 'react';
import Link from 'next/link'

const Home = async () => {
  const response = await fetch("https://yts.mx/api/v2/list_movies.json ");
  const movies = await response.json();
  console.log(movies);

  return (
    <div>
      <Link href="/sponsors">Dashboard</Link>
    </div>
  )
};

export default Home;