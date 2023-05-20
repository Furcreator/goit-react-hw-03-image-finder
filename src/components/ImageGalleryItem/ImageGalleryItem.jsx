import React from 'react'
import { LiGalleryItem, ImageGalleryItemImage } from './ImageGallertItem.styled'

const ImageGalleryItem = ({ image }) => {
    return (
        <LiGalleryItem>
            <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} loading="lazy" />
        </LiGalleryItem>
    )
}
export default ImageGalleryItem