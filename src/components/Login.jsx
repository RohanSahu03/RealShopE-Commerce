import React from 'react'
import style from '../css/login.module.css'

function Login() {
  return (
    <div>
      <div className={`${style.container}`}>
        <div className={`${style.forDesign}`}>
        <div className={`${style.sideDiv}`}></div>
        <div className={`${style.innerContainer}`}>
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp" width="433" height="200" class="lazyload AuthWrapperstyled__StyledPerfImage-sc-1plclw5-9 dSvYWd" alt="banner" />
          <br />
          <br />
          <br />
          <div className="input-group input-group-sm mb-3 px-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
            <input type="text" className="form-control" aria-label="Sizing example input" placeholder='abc@mail.com' aria-describedby="inputGroup-sizing-sm" />
          </div>
            <div className="input-group input-group-sm mb-3 px-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
              <input type="text" className="form-control" aria-label="Sizing example input" placeholder='abc123' aria-describedby="inputGroup-sizing-sm" />
          </div>
          <button type="button" className="btn btn-primary btn-sm px-5">Login</button>
        </div>
        <div className={`${style.sideDiv}`}></div>
        </div>
      </div>
    </div>
  )
}

export default Login