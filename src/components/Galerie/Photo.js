import React, { Fragment } from 'react'
import {  useParams,useNavigate } from 'react-router-dom'
import { allImages  } from '../Data/Data'


const Photo = () => {
  const photos = ["mariage","grossesse","bébé","famille","baptême","couple","portrait"]
  const params = useParams()
  console.log(params)
  const data = params.photoId
  const indexData = photos.indexOf(data)
  // const {image1,image2,image3,image4,image5,image6} = allImages[indexData] 
  const images = allImages[indexData]

  const navigate = useNavigate()
  const handlRetour = ()=>{
    navigate("/Galerie")
  }

  
  return (
    <Fragment>

    <div className='container-bodys'>
    <p onClick={handlRetour}>Retour</p>
    <div className='container-photo'>
    
      {
        images.map((img,index)=>{
          return (
          <div className='content-img' key={index}>
                <img src={img} alt="images" className='myImg' />
          </div>
            )
        })
      }

    </div>
    <p onClick={handlRetour}>Retour</p>
    </div>
    </Fragment>
  )
}

export default Photo
