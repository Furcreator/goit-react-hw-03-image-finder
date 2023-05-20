import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Ul } from './ImageGallery.styled';
import PropTypes from 'prop-types';
const ImageGallery = ({ images, togleModal, addImgLink }) => {
  return (
    <Ul>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          togleModal={togleModal}
          addImgLink={addImgLink}
        />
      ))}
    </Ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  togleModal: PropTypes.func.isRequired,
  addImgLink: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};
