// import landingPage from './landingPage'
import './landingPage.css'
import React from 'react'
import TagManager from 'react-gtm-module'
import Logo from './logo/Padhakku White.png'
import Footer from './components/Footer'

const tagManagerArgs = {
  gtmId: 'GTM-KT2GFP9'
}
TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <div className='container'>
      <div className='logo'><img src={Logo} alt='...' /></div>
      <div className='poster'><img src='https://padhakku.s3.ap-south-1.amazonaws.com/Marketing+landing+Pages/Resume+Page.jpg' alt='...' /></div>
      <div className='content'><p>Get your Resume Review Report with personalized improvement points and 10 mins consultation for free. Register Below!</p></div>
      <div className='flex'>  
        <a className='resume_button' href='https://bit.ly/resume-review-ml'>REVIEW NOW</a>
        </div>
      <Footer className='Footer' />
    </div>
  );
}

export default App;