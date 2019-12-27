import React, { useContext } from 'react';
import Image from './Container';
import Pictures from './Context';

const Gallery = () => {
  const Picture = useContext(Pictures);

  return (
    <div>
      <Image src = { Picture.halo1 } />
      <Image src = { Picture.halo2 } />
      <Image src = { Picture.halo3 } />
    </div>
  )
}

export default Gallery;