// import React from 'react'

interface Props{
  text:string
  size:string
}


function Title({text,size}:Props) {

const fontSize = size === 'large' ? '2em' : size === 'medium' ? '1.5em' : '1em';

  return (
    <h1 style={{fontSize}}>{text}</h1>
  )
}

export default Title










// import React from 'react'

// interface Props{
//   title:string
// }

//  function Title(props:Props) {
//   return (
//     <h1>{props.title}</h1>
//   )
// }

// export default Title


