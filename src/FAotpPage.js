import React from 'react'
import './FAotpPage.css'

function FAotpPage() {
  const Background = 'background.png';//publicfolder-localImage
  const background = {
    backgroundImage: `url(${Background})`,
    height: "100vh",
    width:"100vw",
    zIndex:'-9',
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};
  return (
    <div className='otpPage' >
<div style={background} ></div >
<div className='app-body'>
  <div className='app-details'>
    <h3>Set Up Two-Factor Authentication</h3>
    <p>
Please Enter the OTP/Generated Code
    </p>
    </div>
<form action="" className='myform'>
<input placeholder='OTP' type="text"   className='enterotp'/>
<br />
<button className='authenticate'>Authenticate</button>
<a href="">Resend OTP</a>

</form>

</div>

</div>


  
  )
}

export default FAotpPage