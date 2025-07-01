import React from 'react'
import '../../../public/css/forgetpass.css';
import {Link} from 'react-router-dom';

const ForgetPasswordPage = () => {
  return (
    <>
    <div className="container-fluid img-fluid user-select-none" id='bg-login'>
        <div className="login-first3 row m-2 shadow-lg">
            <form action="" className='text-white '>
                <div className="col-12 my-4 text-center">
                    <h4>Forget Password !</h4>
                </div>
                <div className="col-12 mb-3 mt-5 text-center">
                    <label htmlFor="otp" className='form-label text-white '>OTP Verification</label>
                    <div id='inputs'>
                      <input type="text" placeholder='0' id='otp1' className='form-control bg-transparent text-white border-white' maxLength='1' />
                      <input type="text" placeholder='0' id='otp2' className='form-control bg-transparent text-white border-white' maxLength='1' />
                      <input type="text" placeholder='0' id='otp3' className='form-control bg-transparent text-white border-white' maxLength='1' />
                      <input type="text" placeholder='0' id='otp4' className='form-control bg-transparent text-white border-white' maxLength='1' />
                      <input type="text" placeholder='0' id='otp5' className='form-control bg-transparent text-white border-white' maxLength='1' />
                      <input type="text" placeholder='0' id='otp6' className='form-control bg-transparent text-white border-white' maxLength='1' />
                    </div>
                </div>
                <div className="col-12 form-floating mb-3">
                    <input type="password" placeholder='Password' id='pass' className='form-control bg-transparent text-white border-white' />
                    <label htmlFor="pass" className='form-label text-white'>New Password</label>
                </div>
                <div className="col-12 form-floating mb-3">
                    <input type="password" className='form-control text-white bg-transparent border-white' id='cpass' placeholder='Correct password' />
                    <label htmlFor="cpass" className='form-label text-white'>Repeat Password</label>
                </div>
                <div className="col-12 my-3 mt-4">
                    <Link to='/home' className='text-decoration-none'><button className='px-4 py-2 border-0 rounded d-block mx-auto' type='button'>Change Password</button></Link>
                </div>
                <p className='text-center'>Don't have an account ? <Link className='text-decoration-none text-black' to='/'>New Account</Link></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default ForgetPasswordPage