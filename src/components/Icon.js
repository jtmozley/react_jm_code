import React from 'react';

const Icon = props => (
    <>
      <img
        src={props.source}
        alt="icon component"
        style={{
          width: props.size,
          height: props.size,
          color: props.color,
          filter: props.filter,
        }}
      />
    </>
  );

// to style a png use https://codepen.io/sosuke/pen/Pjoqqp to get filter color from your target
// color and insert that into the filter prop

export default Icon;
