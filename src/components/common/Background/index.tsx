import React from 'react';
import './index.css';

interface Props {
  id?: string;
  style?: React.CSSProperties;
  backgroundImage?: string;
}

function Background({ id, style, backgroundImage }: Props) {
  return (
    <div id={id} className='background' style={style}>
      <img
        src={backgroundImage}
        alt='background'
        className='background-image'
        fetchPriority='high'
        decoding='async'
      />
    </div>
  );
}

export default Background;
