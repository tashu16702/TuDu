import React from 'react'


export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100" style={{color:'white'}}>
  <div className="navbar-start" >
    {/* dropdown of navbar */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Create</a></li>
      <li><a>Booking</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
    {/* logo */}
    <a className="btn btn-ghost text-xl">
  <img src="./tudu_logo.png" alt="Image Description" style={{  width: '100px', height: '55px ' }}/>
</a>

  </div>
{/* navbar and signin */}
  <div className="navbar-end">
    {/* navbar  */}
  <div className="hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
      <li ><a>Home</a></li>
      <li><a>Create</a></li>
      <li><a>Booking</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
    <a className="btn" style={{color:'white'}}>Sign In</a>
  </div>
</div>

<div className="hero h-30" style={{backgroundImage: 'url(./head_bg.jpg)' }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">

    <div className="">
      <h1 className="mb-5 m-8 lg:text-5xl font-bold md:text-4xl sm:text-4xl" style={{color:'white'}}>TuDu Flow Dreams Begin To Glow</h1>
     
      <div class="">
      <a className="btn m-2 lg:text-5sl md:text-4sl sm:text-3sl " style={{color:'white'}}>Create</a>
      <a className="btn m-2 lg:text-5sl md:text-4sl sm:text-3sl " style={{color:'white'}}>Book</a>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
