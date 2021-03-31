import React from 'react';

export default function Guestview(props) {
  return (
    <div>
      <h1>This is the guest landing.</h1>
      <h1>{props.roomKey}</h1>
    </div>
    
    
  );
}

