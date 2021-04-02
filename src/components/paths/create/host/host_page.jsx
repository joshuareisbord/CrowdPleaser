import React from 'react';

export default function Hostview(props) {
  return (

    <div>
      <h1>This is the host landing.</h1>
      <h1>{props.roomKey}</h1>
      <h1>{props.spotifyKey}</h1>
    </div>
    
    
  );
}

