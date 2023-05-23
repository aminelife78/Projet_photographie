import React,{Fragment,useState,useEffect} from 'react'
import GalerieArticle from './GalerieArticle'
import axios from "axios";
import "./Galerie.css"
import { useNavigate } from 'react-router-dom'

const Galerie = () => {
const navigate = useNavigate()

const [categories, setCategories] = useState([])

useEffect(() => {
  axios.get(`http://localhost:8080/api/v1/categories`).then(response=>{
    setCategories(response.data.data)
  }).catch(err=>console.log(err))

}, [])








  const showIndex = (id)=>{
    navigate(`/Galerie/${id}`)
  }

  
  
  return (
   <main className='container'>
    <h2 className='title'>GALERIE</h2>
    <div className='separator'></div>
    <div className='body-container'>
    <div className='contents' >
      {
        categories && categories.map((data,index)=>{
          
          return (
            
            <Fragment key={data.id}>
                <GalerieArticle show={()=>showIndex(data.id)}   img={data.image_couvert} title={data.title} index={data.id} />
            </Fragment>
            )
        })
      }
    </div>
    </div>

   
   </main>
  )
}

export default Galerie
