import React, { Fragment,useState,useEffect } from 'react'
import {  useParams,useNavigate } from 'react-router-dom'



const Photo = () => {
  
  
  const [isloading,setIsloading] = useState(true) 
  const [posts,setPosts] = useState(null)
  const params = useParams()
  const data = params.photoId

 
  // const {image1,image2,image3,image4,image5,image6} = allImages[indexData] 
  

  const navigate = useNavigate()
  const handlRetour = ()=>{
    navigate("/Galerie")
  }
  useEffect(()=>{

    fetch(`http://localhost:1337/api/${data}?populate=image`,
    {
      method:'GET',
      headers:{
        'Accept':'Application/json'
      }
    }).then(res=>res.json()).then(response=>{
      
      setPosts(response)
      setIsloading(false)
  
    })
    
  
  },[data])

  const myPosts = !isloading && posts.data
  const lien = "http://localhost:1337"

  
  return (
    <Fragment>

    <div className='container-bodys'>
    <p onClick={handlRetour}>Retour</p>
    <div className='container-photo'>
    
    {
      !isloading && 
      myPosts.map((post,index)=>{
        return (
          <div key={index} className="content-img">

              
              
            <img src={lien + post.attributes.image.data[0].attributes.formats.small.url} alt="helo" />
    
           </div>
        )
      })
    }

    </div>
    <p onClick={handlRetour}>Retour</p>
    </div>
    </Fragment>
  )




  // const photos = ["mariage","grossesse","bébé","famille","baptême","couple","portrait"]
  // const params = useParams()
  // console.log(params)
  // const data = params.photoId
  // const indexData = photos.indexOf(data)
  // const {image1,image2,image3,image4,image5,image6} = allImages[indexData] 
  // const images = allImages[indexData]

  // const navigate = useNavigate()
  // const handlRetour = ()=>{
  //   navigate("/Galerie")
  // }

  
  // return (
  //   <Fragment>

  //   <div className='container-bodys'>
  //   <p onClick={handlRetour}>Retour</p>
  //   <div className='container-photo'>
    
  //     {
  //       images.map((img,index)=>{
  //         return (
  //         <div className='content-img' key={index}>
  //               <img src={img} alt="images" className='myImg' />
  //         </div>
  //           )
  //       })
  //     }

  //   </div>
  //   <p onClick={handlRetour}>Retour</p>
  //   </div>
  //   </Fragment>
  // )


  


}

export default Photo
