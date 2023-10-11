// import React from 'react'


interface Props{
    text:string
    img:string
    description:string
    color:string
  }

function Card(props:Props) {



  return (
   <div style={{background:props.color}}>
       <h2>{props.text}</h2>
       <img src={props.img} alt="photo"/>
       <p>{props.description}</p>
       

   </div>
    
  )
}

export default Card