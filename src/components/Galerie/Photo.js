import React, { Fragment, useState, useEffect,memo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Photo = () => {
  const [isloading, setIsloading] = useState(true);
  const [posts, setPosts] = useState([]);
  const params = useParams();
  console.log(params)
  const datas = params.photoId;

  const navigate = useNavigate();
  const handlRetour = () => {
    navigate("/Galerie");
  };
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/v1/galerie?categorieId=${datas}`
      )
      .then((response) => {
        setPosts(response.data.data);
        console.log(response.data.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [datas]);



  return (
    <Fragment>
      <div className="container-bodys">
        <p onClick={handlRetour}>Retour</p>
        <div className="container-photo">
          {!isloading &&
            posts.map((post, index) => {
              return (
                <div key={index} className="content-img">
                  <img
                    src={post.image}
                    alt="helo"
                  />
                </div>
              );
            })}
        </div>
        <p onClick={handlRetour}>Retour</p>
      </div>
    </Fragment>
  );

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
};

export default memo(Photo);
