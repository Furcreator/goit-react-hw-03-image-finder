import React from 'react';
import {
  LiGalleryItem,
  ImageGalleryItemImage,
} from './ImageGallertItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, togleModal, addImgLink }) => {
  const onPictureClick = () => {
    addImgLink(image.largeImageURL);
    togleModal();
  };
  return (
    <LiGalleryItem>
      <ImageGalleryItemImage
        src={image.webformatURL}
        alt={image.tags}
        loading="lazy"
        onClick={onPictureClick}
      />
    </LiGalleryItem>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  togleModal: PropTypes.func.isRequired,
  addImgLink: PropTypes.func.isRequired,
};
