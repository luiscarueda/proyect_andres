import React from 'react'
import './gallery.css'
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs'
import { images } from '../../constants';


const galleryImages = [ images.gallery001,images.gallery002,images.gallery004]

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

 


  return (
    <div className='gallery flex__center initial section__padding'>
     
      <div className="gallery__images">
        <div className="gallery__images-container" ref={scrollRef}>
          {galleryImages.map((image,index)=>(
            <div className ='gallery__images-card flex__center key={`[gallery_image-${index + 1}`}'>
              <img src={image} alt="gallery_images" />

            </div>
          ))}

        </div>
        <div className="gallery__images-arrow">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon'onClick={()=> scroll('right')}/>
        </div>
      </div>

    </div>
  )
}

export default Gallery

