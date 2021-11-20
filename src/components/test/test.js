import React from 'react'
import './test.css'
import Logo from '../../assets/icons/remind.png'
import Logo1 from '../../assets/icons/phongkham.png'
// import Logo from '../../../assets/icons/Logo.png'
// import Search from '../../../assets/icons/Search.png'
// import {useSelector} from 'react-redux'
// import { useHistory } from 'react-router'
// import { Link } from 'react-router-dom'
const Test = () => {

return (    
    <div className='main1'>
       <div className='notification center'>
       <input type='checkbox' name='' id=''/>
           <div className='num'>3</div>
      <div className='box'>
        <div className='heading'>
                    <p><i>Thông Báo</i></p>
                </div>
                <div className='notification_box'>
                    <a href='' className="header_notify-link">
                    <img src={Logo} alt='' className='header_notify-img'/>
                    <div className='header_notify-info'>
                    <span className='header_notify-name'>Nhắc Nhở</span>
                    <span className='header_notify-descriotion'>Bạn có lịch hẹn Khám lúc 00:00 ,dd/mm/yyyy</span>
                    </div>
                
                </a>
                <a href='' className="header_notify-link">
                    <img src={Logo1} alt='' className='header_notify-img'/>
                    <div className='header_notify-info'>
                    <span className='header_notify-name'>dd/mm/yyyy</span>
                    <span className='header_notify-descriotion'>phòng khám xin thông báo.....</span>
                    </div>
                </a>
                <a href='' className="header_notify-link">
                    <img src={Logo} alt='' className='header_notify-img'/>
                    <div className='header_notify-info'>
                    <span className='header_notify-name'>Nhắc Nhở</span>
                    <span className='header_notify-descriotion'>Bạn có lịch hẹn Khám lúc 00:00 ,dd/mm/yyyy</span>
                    </div>
                    </a>
                    
          </div>
      </div>
       </div>
       </div>
)
}
export default Test;