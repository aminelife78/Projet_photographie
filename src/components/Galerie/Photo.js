import React, { Fragment } from 'react'
import {  useParams } from 'react-router-dom'
import { allImages  } from '../Data/Data'

const Photo = () => {
  const params = useParams()
  const data = params.photoId
  const {image1,image2,image3,image4,image5,image6} = allImages[data]

  


  
  return (
    <Fragment>
    <div className='container-bodys'>
    <div className='container-photo'>
      <img src={image1} alt="img" />
      <img src={image2} alt="img" />
      <img src={image3} alt="img" />
      <img src={image4} alt="img" />
      <img src={image5} alt="img" />
      <img src={image6} alt="img" />

    </div>
    </div>
    </Fragment>
  )
}

export default Photo
