import React,{useEffect,useState} from "react";
import "./Tarifs.css";

const CardTarifs = () => {
  const [isloading,setIsloading] = useState(true) 
  const [tarifs,setTarifs] = useState(null)

  useEffect(()=>{
    fetch(`https://intense-crag-86216.herokuapp.com/api/tarifs?populate=image`,
    {
      method:'GET',
      headers:{
        'Accept':'Application/json'
      }
    }).then(res=>res.json()).then(response=>{
    
      setTarifs(response)
      setIsloading(false)
  
    })
    
  
  },[])

  const myTarifs = !isloading && tarifs.data
 


  return (
    <>
    {
      !isloading && 
      myTarifs.map((tarif,index)=>{

      return(
    <article key={index} className={`tarifs${index} card-container-tarifs`}>
      <div className="card-img-tarifs">
        <img className="myImg-tarifs" src={ tarif.attributes.image.data[0].attributes.formats.small.url} alt="couple" />
      </div>
      <div className="card-body-tarifs">
        
          <h3>{tarif.attributes.titre}</h3>
          <p>{tarif.attributes.text}</p>
        
        <div className="prix-tarifs">
          <h4>{tarif.attributes.prix} </h4>
        </div>
      </div>
    </article>)})
  }
  </>
  );
};

export default CardTarifs;
