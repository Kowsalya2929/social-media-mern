import React from 'react'
import '../../public/css/navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (

      <nav className='navbar navbar-expand-lg'>

        <div className='container-fluid '>

          <a href="/home" className='navbar-brand fw-semibold col-1 text-white'>SocialMedia</a>

          {/* for large size */}

          {/* search */}

          <div className='d-none d-lg-block offset-1 col-5'>
            <div className='input-group '>
              <input type="search" placeholder='Search...' className='form-control' />
              <span className='input-group-text'><i className="bi bi-search fs-5"></i></span>
            </div>
          </div>

          {/* mic */}

          <div className='d-none d-lg-block '>
            <i className="bi bi-mic-fill fs-5 ms-3"></i>
          </div>

          {/* create button */}

          <div className='input-group fs-5 d-none d-lg-block ms-5' data-bs-toggle='dropdown' data-bs-target='#dtd'>
            <button type='button' className='btn btn-light d-flex flex-row rounded-pill align-items-center'><i className="bi bi-plus-lg fs-5 input-group-text border-0"></i> Create &nbsp;&nbsp;</button>
              <ul className='dropdown-menu' id='dtd'>
                <li className='dropdown-item w-auto'><Link className='text-decoration-none text-black'><i className="bi bi-play-btn text-danger"></i> &nbsp; Upload Video</Link></li>
                <li className='dropdown-item w-auto'><Link className='text-decoration-none text-black'><i className="bi bi-pencil-square text-sucess"></i> &nbsp; Create Post</Link></li>              
              </ul>
          </div>

          {/* notification */}

          <div className='d-none d-lg-block' >
            <i className="bi bi-bell-fill fs-5" ></i>
          </div>

          {/* all */}

          <div className='d-none d-lg-block ms-5'>
            <i className="bi bi-three-dots-vertical fs-5" data-bs-toggle="dropdown" data-bs-target="#db" id='parent1'></i>
            <ul className='dropdown-menu' id='db' >
              <li className='dropdown-item'><Link className='text-decoration-none text-black'><i className="bi bi-house-fill text-info fs-5"></i> &nbsp; Home</Link></li>
              <li className='dropdown-item'><Link className='text-decoration-none text-black'><i className="bi bi-person-square" style={{color:"pink"}}></i> &nbsp; MyProfile</Link></li>
              <li className='dropdown-item'><Link className='text-decoration-none text-black'><i className="bi bi-box-arrow-right" style={{color:"GrayText"}}></i> &nbsp; Sign Out</Link></li>
              <li className='dropdown-item'><Link className='text-decoration-none text-black'><i className="bi bi-gear-fill" style={{color:"darkviolet"}}></i> &nbsp; Settings</Link></li>
              <li className='dropdown-item'><Link className='text-decoration-none text-black'><i className="bi bi-question-circle" style={{color:"gold"}}></i> &nbsp; Help</Link></li>
            </ul>
          </div>





          {/* for mobile size */}

          {/* search */}

          <div className='d-block d-lg-none ms-5' id='sear'>
            <i className="bi bi-search fs-5" data-bs-toggle='dropdown' data-bs-target='#sear1'></i>
          <ul className='dropdown-menu' id='sear1'>
            <li className='dropdown-item'>
              <input type="search" placeholder='Search...' className='form-control' />
            </li>
          </ul>

          {/* mic */}

          <i className="bi bi-mic-fill fs-5 ms-3"></i>
          </div>

          <button className='navbar-toggler text-white' type='button' data-bs-target='#sm' data-bs-toggle='collapse'>
            <span className='text-white'><i className="bi bi-list"></i></span>
          </button>

          <div className="collapse navbar-collapse " id='sm'>
            <ul className='navbar-nav bg-body-tertiary ps-5 d-block d-lg-none'>
              <li className='nav-item'><Link to="/home" className='text-decoration-none text-black nav-link py-3'><i className="bi bi-house-fill text-info fs-5"></i> &nbsp; Home</Link></li>
              <li className='nav-item'><Link className='text-decoration-none nav-link text-black py-3'><i className="bi bi-bell-fill text-success"></i> &nbsp; Notifications</Link></li>
              <li className='nav-item'><span className='nav-link text-black py-3 dropdown-toggle' data-bs-toggle='dropdown' data-bs-target='create1'><i className="bi bi-plus-lg text-warning"></i> &nbsp; Create</span>
              <ul className='dropdown-menu'>
                <li className='dropdown-item w-auto'><Link className='text-decoration-none text-black'><i className="bi bi-play-btn text-danger"></i> &nbsp; Upload Video</Link></li>
                <li className='dropdown-item w-auto'><Link className='text-decoration-none text-black'><i className="bi bi-pencil-square text-sucess"></i> &nbsp; Create Post</Link></li>
              </ul>
              </li>
              <li className='nav-item'><Link className='nav-link text-decoration-none text-black py-3'><i className="bi bi-person-square" style={{color:"pink"}}></i> &nbsp; MyProfile</Link></li>
              <li className='nav-item'><Link className='nav-link text-decoration-none text-black py-3'><i className="bi bi-box-arrow-right" style={{color:"GrayText"}}></i> &nbsp; Sign Out</Link></li>
              <li className='nav-item'><Link className='nav-link text-decoration-none text-black py-3'><i className="bi bi-gear-fill" style={{color:"darkviolet"}}></i> &nbsp; Settings</Link></li>
              <li className='nav-item'><Link className='nav-link text-decoration-none text-black py-3'><i className="bi bi-question-circle" style={{color:"gold"}}></i> &nbsp; Help</Link></li>
            </ul>
          </div>

        </div>
        
      </nav>
  )
}

export default Navbar