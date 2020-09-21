import React from 'react';


const Avatar = (props) => {
  const { src } = props;
  return (
    <img
      style={{ width: "80px", height: "80px", borderRadius: "50%" }}
      src={src}>
    </img>
  )

}

export default Avatar;