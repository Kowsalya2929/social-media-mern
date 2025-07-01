import React from 'react'
import '../../../public/css/register.css';
import {Link} from 'react-router-dom';

const RegisterPage = () => {
  return (
    <>
    <div className="container-fluid img-fluid user-select-none" id='bg-login'>
        <div className="login-first row m-2">
            <form action="" className='text-white'>
                <div className="col-12 my-4 text-center">
                    <h4>Create Account</h4>
                    <p>Enter your personal data</p>
                </div>
                <div className="col-12 form-floating mb-3">
                    <input type="text" placeholder='Username' id='un' className='form-control bg-transparent text-white border-white' />
                    <label htmlFor="un" className='form-label text-white'>Username</label>
                </div>
                <div className="col-12 form-floating mb-3">
                    <input type="email" placeholder='Email Adress' id='em' className='form-control bg-transparent text-white border-white' />
                    <label htmlFor="em" className='form-label text-white'>Email Id</label>
                </div>
                <div className="col-12 form-floating mb-3">
                    <input type="password" placeholder='Password' id='pass' className='form-control bg-transparent text-white border-white' />
                    <label htmlFor="pass" className='form-label text-white'>Create Password</label>
                </div>
                <div className="col-12 form-floating mb-3">
                    <input type="password" className='form-control text-white bg-transparent border-white' id='cpass' placeholder='Correct password' />
                    <label htmlFor="cpass" className='form-label text-white'>Repeat Password</label>
                </div>
                <div className="col-12 my-3 mt-4">
                    <Link to='/home' className='text-decoration-none'><button className='px-4 py-2 border-0 rounded d-block mx-auto' type='button'>SignUp</button></Link>
                </div>
                <p className='text-center'>Already i have an account ? <Link className='text-decoration-none text-black' to='/'>Login</Link></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default RegisterPage