import React, { Component } from 'react'
import '../styles/Home.css'
import Background from '../images/background.png'
import Agatha from '../images/ellas.png'
import Logo from '../images/logo.png'
import PlayText from '../images/titlemob.png'
import PlayBtn from '../images/boton.png'
import FooterMob from '../images/footermob.png'
import FooterDesk from '../images/footerdesk.png'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }
  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render () {
    return (
      <div className='home-main-container'>
        <img className='background' src={Background} alt='Agatha Primera Background' />
        <div className='home-inner-container'>
          <div className='agatha-container'>
            <div className='playbox'>
              <img className='playtext' src={PlayText} alt='Agatha Primera Play' />
              <img className='playbtn' src={PlayBtn} onClick={this.handleClick} alt='Agatha Primera Play' />
            </div>
            <img className='animated agatha-band' src={Agatha} alt='Agatha Primera Band' />
            <img className='animated infinite pulse agatha-logo' src={Logo} alt='Agatha Primera Logo' />
            <div className='video-container'>
            {(this.state.show) &&
              <iframe style={{width: '400px', height: '300px'}} title='Agatha LOVE YOUR WAY' src='https://www.youtube.com/embed/O5idjEkOBA0?ecver=2' frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
            }
            </div>
          </div>
        </div>
        <img src={FooterMob} alt='footer' className='footermob' />
        <img src={FooterDesk} alt='footer' className='footerdesk' />
      </div>
    )
  }
}

export default Home
