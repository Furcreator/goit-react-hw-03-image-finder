import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import { Ul } from "./ImageGallery.styled"
const ImageGallery = ({ images }) => {
    return (
        <Ul>
            {images.map(image => 
            <ImageGalleryItem key={image.id} image={image}/>)}
        </Ul>
    )
}

export default ImageGallery