import React from 'react'
import Navbar from '../components/Navbar.jsx';
import '../css/navbar.css';
import profile from '../images/profile.jpg';

const HomePage = () => {
  return (
    <>
    <div className='w-100 vh-auto overflow-hidden backdrop-overlay' id='hh'>
    <Navbar />
    {/* gutter only access y not x why tell me */}
    <div className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 p-4 g-3 my-3 mx-auto"> 
      {/* 1 */}
      <div className='col'>
        
        <div className="card bg-secondary-subtle">

          <div className="card-body">
            <div className='d-flex flex-row align-items-center mb-3'>
              <img src={profile} alt="logo" height='50' width='50' className='rounded-circle' /><h4 className='ms-3'>Name</h4>
            </div>
            <iframe width='100%' height='auto'  src="https://www.youtube.com/embed/ZEyAs3NWH4A?si=JCn1tRLN05GSyuYE" title="YouTube video player"></iframe>
          </div>

          <div className="card-footer">
            <p className='text-truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa illum voluptates, magnam amet quos voluptatibus officia beatae rem voluptate nam dolorem aperiam at recusandae blanditiis quo veniam illo fugiat?</p>
            <p className='' style={{marginBottom:"-1px"}}>7 hours ago</p>
          </div>

        </div>

      </div>
      {/* 2 */}
      <div className='col'>
        
        <div className="card bg-secondary-subtle">

          <div className="card-body">
            <div className='d-flex flex-row align-items-center mb-3'>
              <img src={profile} alt="logo" height='50' width='50' className='rounded-circle' /><h4 className='ms-3'>Name</h4>
            </div>
            <iframe width='100%' height='auto'  src="https://www.youtube.com/embed/ZEyAs3NWH4A?si=JCn1tRLN05GSyuYE" title="YouTube video player"></iframe>
          </div>

          <div className="card-footer">
            <p className='text-truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa illum voluptates, magnam amet quos voluptatibus officia beatae rem voluptate nam dolorem aperiam at recusandae blanditiis quo veniam illo fugiat?</p>
            <p className='' style={{marginBottom:"-1px"}}>7 hours ago</p>
          </div>

        </div>

      </div>
      {/* 3 */}
      <div className='col'>
        
        <div className="card bg-secondary-subtle">

          <div className="card-body">
            <div className='d-flex flex-row align-items-center mb-3'>
              <img src={profile} alt="logo" height='50' width='50' className='rounded-circle' /><h4 className='ms-3'>Name</h4>
            </div>
            <iframe width='100%' height='auto'  src="https://www.youtube.com/embed/ZEyAs3NWH4A?si=JCn1tRLN05GSyuYE" title="YouTube video player"></iframe>
          </div>

          <div className="card-footer">
            <p className='text-truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa illum voluptates, magnam amet quos voluptatibus officia beatae rem voluptate nam dolorem aperiam at recusandae blanditiis quo veniam illo fugiat?</p>
            <p className='' style={{marginBottom:"-1px"}}>7 hours ago</p>
          </div>

        </div>

      </div>
      {/* 4 */}
      <div className='col'>
        
        <div className="card bg-secondary-subtle">

          <div className="card-body">
            <div className='d-flex flex-row align-items-center mb-3'>
              <img src={profile} alt="logo" height='50' width='50' className='rounded-circle' /><h4 className='ms-3'>Name</h4>
            </div>
            <iframe width='100%' height='auto'  src="https://www.youtube.com/embed/ZEyAs3NWH4A?si=JCn1tRLN05GSyuYE" title="YouTube video player"></iframe>
          </div>

          <div className="card-footer">
            <p className='text-truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa illum voluptates, magnam amet quos voluptatibus officia beatae rem voluptate nam dolorem aperiam at recusandae blanditiis quo veniam illo fugiat?</p>
            <p className='' style={{marginBottom:"-1px"}}>7 hours ago</p>
          </div>

        </div>

      </div>
      {/* 5 */}
      <div className='col'>
        
        <div className="card bg-secondary-subtle">

          <div className="card-body">
            <div className='d-flex flex-row align-items-center mb-3'>
              <img src={profile} alt="logo" height='50' width='50' className='rounded-circle' /><h4 className='ms-3'>Name</h4>
            </div>
            <iframe width='100%' height='auto'  src="https://www.youtube.com/embed/ZEyAs3NWH4A?si=JCn1tRLN05GSyuYE" title="YouTube video player"></iframe>
          </div>

          <div className="card-footer">
            <p className='text-truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa illum voluptates, magnam amet quos voluptatibus officia beatae rem voluptate nam dolorem aperiam at recusandae blanditiis quo veniam illo fugiat?</p>
            <p className='' style={{marginBottom:"-1px"}}>7 hours ago</p>
          </div>

        </div>

      </div>
      {/* 6 */}
      <div className='col'>
        
        <div className="card bg-secondary-subtle">

          <div className="card-body">
            <div className='d-flex flex-row align-items-center mb-3'>
              <img src={profile} alt="logo" height='50' width='50' className='rounded-circle' /><h4 className='ms-3'>Name</h4>
            </div>
            <iframe width='100%' height='auto'  src="https://www.youtube.com/embed/ZEyAs3NWH4A?si=JCn1tRLN05GSyuYE" title="YouTube video player"></iframe>
          </div>

          <div className="card-footer">
            <p className='text-truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa illum voluptates, magnam amet quos voluptatibus officia beatae rem voluptate nam dolorem aperiam at recusandae blanditiis quo veniam illo fugiat?</p>
            <p className='' style={{marginBottom:"-1px"}}>7 hours ago</p>
          </div>

        </div>

      </div>
      {/* 7 */}
      <div className='col'>
        
        <div className="card bg-secondary-subtle">

          <div className="card-body">
            <div className='d-flex flex-row align-items-center mb-3'>
              <img src={profile} alt="logo" height='50' width='50' className='rounded-circle' /><h4 className='ms-3'>Name</h4>
            </div>
            <iframe width='100%' height='auto'  src="https://www.youtube.com/embed/ZEyAs3NWH4A?si=JCn1tRLN05GSyuYE" title="YouTube video player"></iframe>
          </div>

          <div className="card-footer">
            <p className='text-truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa illum voluptates, magnam amet quos voluptatibus officia beatae rem voluptate nam dolorem aperiam at recusandae blanditiis quo veniam illo fugiat?</p>
            <p className='' style={{marginBottom:"-1px"}}>7 hours ago</p>
          </div>

        </div>

      </div>
      {/* 8 */}
      <div className='col'>
        
        <div className="card bg-secondary-subtle">

          <div className="card-body">
            <div className='d-flex flex-row align-items-center mb-3'>
              <img src={profile} alt="logo" height='50' width='50' className='rounded-circle' /><h4 className='ms-3'>Name</h4>
            </div>
            <iframe width='100%' height='auto'  src="https://www.youtube.com/embed/ZEyAs3NWH4A?si=JCn1tRLN05GSyuYE" title="YouTube video player"></iframe>
          </div>

          <div className="card-footer">
            <p className='text-truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa illum voluptates, magnam amet quos voluptatibus officia beatae rem voluptate nam dolorem aperiam at recusandae blanditiis quo veniam illo fugiat?</p>
            <p className='' style={{marginBottom:"-1px"}}>7 hours ago</p>
          </div>

        </div>

      </div>
      {/* 9 */}
      <div className='col'>
        
        <div className="card bg-secondary-subtle">

          <div className="card-body">
            <div className='d-flex flex-row align-items-center mb-3'>
              <img src={profile} alt="logo" height='50' width='50' className='rounded-circle' /><h4 className='ms-3'>Name</h4>
            </div>
            <iframe width='100%' height='auto'  src="https://www.youtube.com/embed/ZEyAs3NWH4A?si=JCn1tRLN05GSyuYE" title="YouTube video player"></iframe>
          </div>

          <div className="card-footer">
            <p className='text-truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa illum voluptates, magnam amet quos voluptatibus officia beatae rem voluptate nam dolorem aperiam at recusandae blanditiis quo veniam illo fugiat?</p>
            <p className='' style={{marginBottom:"-1px"}}>7 hours ago</p>
          </div>

        </div>

      </div>
      {/* 10 */}
      <div className='col'>
        
        <div className="card bg-secondary-subtle">

          <div className="card-body">
            <div className='d-flex flex-row align-items-center mb-3'>
              <img src={profile} alt="logo" height='50' width='50' className='rounded-circle' /><h4 className='ms-3'>Name</h4>
            </div>
            <iframe width='100%' height='auto'  src="https://www.youtube.com/embed/ZEyAs3NWH4A?si=JCn1tRLN05GSyuYE" title="YouTube video player"></iframe>
          </div>

          <div className="card-footer">
            <p className='text-truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa illum voluptates, magnam amet quos voluptatibus officia beatae rem voluptate nam dolorem aperiam at recusandae blanditiis quo veniam illo fugiat?</p>
            <p className='' style={{marginBottom:"-1px"}}>7 hours ago</p>
          </div>

        </div>

      </div>


      

    </div>
    </div>
    </>
  )
}

export default HomePage