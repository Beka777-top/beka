import React from 'react';

function Seconds(props) {
  const { name, age, bio } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{bio}</p>
    </div>
  );
}

export default Seconds;