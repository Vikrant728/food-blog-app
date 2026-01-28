import React from 'react'
import foodrecipe from '../assets/foodrecipe.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Recipeitems from '../components/Recipeitems'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'

function Home() {
  const navigate=useNavigate()
  const [isOpen,setIsOpen]=useState(false)
  const addRecipe=()=>{
    let token=localStorage.getItem("token")
    if(token)
     navigate("/addRecipe")
    else{
      setIsOpen(true)
    }

  }
  return (
    <>
    
    <section className='home'>
    <div className='left'>  
    <h1>Food Recipe</h1>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero, alias architecto, laborum excepturi nesciunt ipsa tenetur ad sit veritatis numquam possimus dolorum? Possimus corporis quidem, incidunt dolores officiis ratione!</h5>
<button onClick={addRecipe}>Share your recipe</button>


</div>
    <div className='right'>
    <img src={foodrecipe} width="320px" height="300px"></img>       

</div>
    </section>
    <div className='bg'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillopacity="1" d="M0,0L34.3,0C68.6,0,137,0,206,32C274.3,64,343,128,411,149.3C480,171,549,149,617,133.3C685.7,117,754,107,823,117.3C891.4,128,960,160,1029,154.7C1097.1,149,1166,107,1234,106.7C1302.9,107,1371,149,1406,170.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>

    </div>
{isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>)}
<div className='recipe'>
      <Recipeitems/>

   </div>
    
    </>
  )
}

export default Home