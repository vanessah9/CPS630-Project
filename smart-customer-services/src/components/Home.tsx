import React from "react";

type appProps = {
  name: string,
  age?: number, //optional prop
};

function Home({ name, age }: appProps) {
  return (
    <div className="App">
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}
export default Home;