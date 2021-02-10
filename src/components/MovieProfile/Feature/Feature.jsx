import React from 'react';

const Feature = ({className, nameFeature, value}) => {
  return (
    <div className={className}>
      <span>{nameFeature}: </span>
      <span>{value}</span>
    </div>
  )
};

export default Feature;