
import Title from './Title'


function Header () {
  return (
    <header style={{display: "flex", justifyContent:"space-around", alignItems: "center" }}>
      <Title text="my website" size='large'/>
      <button>button</button>

    </header>
  )
}


export default Header 


