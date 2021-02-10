import React from 'react';
import Image from "../Image/Image";
import Title from "../Title/Title";
import Feature from "./Feature/Feature";

const MovieProfile = ({movie}) => {

  let featuresArr = [];

  for (let key in {...movie}) {
    if (movie[key] === 'N/A') {
      continue;
    } else {
      featuresArr.push({id: key, value: movie[key]});
    }
  }
  ;

  let features = featuresArr.map(f => {
    if (f.id === 'Poster') {
      return <Image url={f.value} alt={featuresArr[0].value}/>;
    } else if (f.id === 'Title') {
      return <Title title={f.value}/>
    } else if (f.id === 'Ratings') {
      return null;
    } else if (f.id === 'Response') {
      return null;
    } else {
      return <Feature className={`profile-${f.id}`} nameFeature={f.id} value={f.value}/>
    }
  })

  return (
    <main className='profile'>
      {features}
    </main>
  )

};

export default MovieProfile;