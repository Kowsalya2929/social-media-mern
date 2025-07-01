import React from 'react'
import '../../../public/css/login.css';
import {Link} from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
    <div className="container-fluid img-fluid user-select-none" id='bg-login'>
        <div className="login-first1 row m-2">
            <form action="" className='text-white'>
                <div className="col-12 my-4 text-center">
                    <h4>Welcome Back !</h4>
                    <p>Enter your personal existing data</p>
                </div>
                <div className="col-12 form-floating mb-3">
                    <input type="email" placeholder='Email Adress' id='em' className='form-control bg-transparent text-white border-white' />
                    <label htmlFor="em" className='form-label text-white'>Email Id</label>
                </div>
                <div className="col-12 form-floating mb-3">
                    <input type="password" placeholder='Password' id='pass' className='form-control bg-transparent text-white border-white' />
                    <label htmlFor="pass" className='form-label text-white'>Create Password</label>
                </div>
                <p className='text-end'><Link className='text-decoration-none text-black' to='/forgetpass'>Forget password?</Link></p>
                <div className="col-12 my-3 mt-4">
                    <Link to='/home' className='text-decoration-none'><button className='px-4 py-2 border-0 rounded d-block mx-auto' type='button'>Login</button></Link>
                </div>
                <p className='text-center'>Don't have an account ? <Link className='text-decoration-none text-black' to='/register'>New Account</Link></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default LoginPage