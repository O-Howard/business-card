import './App.css'
import heroImg from './assets/hero-image-1.jpg'
import overlayImg from './assets/white-overlay.svg'
import avatar from './assets/avatar-image-business-card-1.png'

function App() {
  

  return (
    <>
      <div className='card'>
        <div className='cardS'>
          <div className='pic'>
            <img className='heroImg' src={heroImg} alt="" />
            <img className='overlayImg' src={overlayImg} alt="" />
          </div>
          <div className='title'>
            Perfect solution for small business
          </div>
          <div className='text'>
            Small businesses need to generate leads to grow. You can use tools like Ringy.
          </div>
          <hr />
          <div className='contact'>
            <img className='avatar' src={avatar} alt="avatar" />
            <div className='name'>
              <p className='contactTitle'>Amy Burgess</p>
              <p className='contactDetails'>Customer Manger, Solution Oy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
