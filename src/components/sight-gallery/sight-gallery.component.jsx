import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

import './sight-gallery.scss'

const SightGallery = ({ attractions, language }) => {

  const images = attractions.map((el) => {
    return {
      original: `${el.photo_url}`,
      thumbnail: `${el.photo_url}`,
      description: `${el.description[language]}`,
      thumbnailLabel: `${el.name[language]}`
    }
  });

  return <ImageGallery items={images} />;
};

export default SightGallery;
