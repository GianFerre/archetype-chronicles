import './index.css'
import AC from "./assets/AC.png"
import warrior from "./assets/warrior.png"
import mage from "./assets/mage.png"

function App() {
  return (
    <>
      <div className='hero-text'>
        <h1 className="header-title">Archetype Chronicles</h1>
        <h3>Unlock the Secrets of Your Character.</h3>
      </div>
      <div className="hero-image">
        <img src={warrior}></img>
        <img src={AC}></img>
        <img src={mage}></img>
      </div>
    </>
  )
}

export default App
