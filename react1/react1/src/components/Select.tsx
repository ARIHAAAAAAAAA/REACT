// import Card from "./Card"

function Select({setColor}) {

    const changeColor = (event:React.ChangeEvent<HTMLSelectElement>)=>{
       const newColor = event.target.value
       setColor(newColor)
        
        
    }

  return (
    <>
    <select onChange={changeColor} >
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="black">black</option>
        <option value="silver">silver</option>
    </select>
    <br />
    <input type="text" placeholder="add color"/>
    </>
  )
}


export default Select
