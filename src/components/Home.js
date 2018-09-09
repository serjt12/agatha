import React from 'react'
import '../styles/Home.css'
import Background from '../images/background.png'
import Agatha from '../images/ellas.png'
import Logo from '../images/logo.png'
import PlayText from '../images/titlemob.png'
import PlayBtn from '../images/boton.png'
const Home = () => (
  <div className='home-main-container'>
    <img className='background' src={Background} alt='Agatha Primera Background' />
    <div className='home-inner-container'>
      <div className='agatha-container'>
        <div className='playbox'>
          <img className='playtext' src={PlayText} alt='Agatha Primera Play' />
          <img className='playbtn' src={PlayBtn} alt='Agatha Primera Play' />
        </div>
        <img className='animated agatha-band' src={Agatha} alt='Agatha Primera Band' />
        <img className='animated infinite pulse agatha-logo' src={Logo} alt='Agatha Primera Logo' />
        <div className='video-container'>
          <iframe title='Agatha LOVE YOUR WAY' src='https://www.youtube.com/embed/O5idjEkOBA0?ecver=2' allowFullScreen />
        </div>
      </div>
    </div>
  </div>
)
export default Home
