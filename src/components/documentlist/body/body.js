import React,{useEffect}from 'react'
// import {useDispatch,useSelector} from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
// import {useHistory} from 'react-router-dom'
// import {TOKEN, USER_LOGOUT} from '../../../actions/types'
// import setAuthToken from '../../../utils/setAuthToken'
import Background from '../../../assets/image/background@2x.png'
import Headerdocument from '../header/header';
import Footer from '../../Footer/Footer';
import './document.css'
import Logo from '../../../assets/icons/remind.png'
import Logo1 from '../../../assets/icons/phongkham.png'
import Logo2 from '../../../assets/icons/word.png'
import Logo3 from '../../../assets/icons/view.png'
import Logo4 from '../../../assets/icons/dow.png'
import Logo5 from '../../../assets/icons/excel.png'
import Logo6 from '../../../assets/icons/pdf.png'
import excel from '../../../assets/file/test.xlsx'
import word from '../../../assets/file/word.docx'

import pdf from '../../../assets/file/word.pdf'

const bodydocument = () =>{
    
    return (
        <div className="main">
                <Headerdocument></Headerdocument>
            <div className="body">
                <div className="body-container">
                    <div className="container-left">
                            <div className="user-information">
                                <img className="user-avatar" src=''/>
                                <div style={{flexDirection:'column',display:'flex',alignItems:'center',width:'100%'}}>
                                    <label className="firstname-label">
                                        
                                        <ion-icon name="create-outline" style={{fontSize:'40px',color:'#888e86'}}></ion-icon>
                                    </label>
                                    <label className="pet-label">Pet: 0</label>
                                </div>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Hồ sơ thú cưng
                                    </label>
                                    <ion-icon name="paw-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Lịch hẹn
                                    </label>
                                    <ion-icon name="calendar-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Nhân sự
                                    </label>
                                    <ion-icon name="person-circle" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Phòng khám
                                    </label>
                                    <ion-icon name="home-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Tài liệu
                                    </label>
                                    <ion-icon name="document-text-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Cài đặt
                                    </label>
                                    <ion-icon name="settings-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process">
                                    <label className="btn-label">
                                        Hỗ trợ
                                    </label>
                                    <ion-icon name="help-circle-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                                <button className="btn-process" >
                                    <label className="btn-label">
                                        Đăng xuất
                                    </label>
                                    <ion-icon name="log-out-outline" style={{fontSize:'40px',color:'#1E3A28'}}></ion-icon>
                                </button>
                            </div>
                        
                    </div>
                    <div className="container-right">
                   
                        <div className="box1">
                            <div className="box-header1">
                                <label className="box-header-title1">Tài Liệu Tải Lên Bởi Phòng Khám:</label>
                                </div>
                            <div className='file'>
                               
                                <p href='' className="header_file">
                                <img src={Logo2} alt='' className='header_file-img'/>
                                <div className='header_file-info'>
                                <span className='header_file-name'>File Name</span>
                                <span className='header_file-descriotion'>File description</span>
                                <button><span className='header_file-descriotion'>
                                <img src={Logo3} alt='' className='header_file-img1'/>
                                <a href={word} download='word'><span className='header_file-descriotion'>
                                <img src={Logo4} alt='' className='header_file-img1'/>
                                </span></a>
                                </span>
                                </button>
                                </div>
                                

                            </p>
                            <p href='' className="header_file">
                                <img src={Logo5} alt='' className='header_file-img'/>
                                <div className='header_file-info'>
                                <span className='header_file-name'>File Name</span>
                                <span className='header_file-descriotion'>File description</span>
                                <button><span className='header_file-descriotion'>
                                <img src={Logo3} alt='' className='header_file-img1'/>
                                <a href={excel} download='excel'><span className='header_file-descriotion'>
                                <img src={Logo4} alt='' className='header_file-img1'/>
                                </span></a>
                                </span>
                                </button>
                                </div>
                                

                            </p>
                            <p href='' className="header_file">
                                <img src={Logo6} alt='' className='header_file-img'/>
                                <div className='header_file-info'>
                                <span className='header_file-name'>File Name</span>
                                <span className='header_file-descriotion'>File description</span>
                              
                                <button><span className='header_file-descriotion'>
                                <img src={Logo3}  alt='' className='header_file-img1'/>
                                <a href={pdf} download='pdf'><span className='header_file-descriotion'>
                                <img src={Logo4} alt='' className='header_file-img1'/>
                                </span></a>
                                </span>
                                </button>
                              
                                </div>
                                
                        
                            </p>
                            

                            
    
                            
                        </div>
                    </div>
                </div>  
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default bodydocument;