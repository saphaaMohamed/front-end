import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Exprience Download <br /> Tomato</p>
        <div className="App-Download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload
