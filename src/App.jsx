import './index.css'
import AC from "./assets/AC.png"
import warrior from "./assets/warrior.png"
import mage from "./assets/mage.png"

function App() {
  // Click handler for the button
  const handleQuizClick = () => {
    alert('Quiz starting soon!'); // You can replace this with navigation or functionality
  };
  return (
    <>
      <div className='ubuntu hero-section'>
        <h1 className="ubuntu header-title">Archetype Chronicles</h1>
        <h3 className='ubuntu'>Unlock the Secrets of Your Character.</h3>
        <button className='quiz-button' onClick={handleQuizClick}>
          Take Your Quiz!
        </button>
      </div>
      <div className='ubuntu description'>
        <p>
          "Archetype Chronicles" is an immersive and interactive website designed to captivate RPG enthusiasts and anyone curious about their place in a fantasy world. The website offers an engaging personality quiz that helps users uncover their true RPG archetype, encouraging self-discovery in a world of knights, mages, rogues, and adventurers. With an intuitive design and an enchanting visual aesthetic, "Archetype Chronicles" combines entertainment and introspection to create a unique online experience.
        </p>
        <p>
          Upon landing on the site, users are greeted with a dynamic hero section that sets the tone for their journey. The call-to-action, "Unlock the Secrets of Your Character," invites users to explore their strengths, values, and personal quirks through a series of carefully curated questions. The quiz results reveal which fantasy archetype the user aligns with, providing insights into their role in a narrative universe—be it a bold Warrior, a cunning Rogue, a wise Mage, or a compassionate Healer. Each archetype is accompanied by a rich character profile that outlines defining traits, strengths, weaknesses, and potential storylines for role-playing inspiration.
        </p>
      </div>
    </>
  )
}

export default App
