import React,{Fragment} from 'react'
import './Headerdocument.css'
import Logo from '../../../assets/icons/Logo.png'
import Search from '../../../assets/icons/Search.png'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Test from '../../test/test'
const Headerdocument = () => {
const user = useSelector(state => state.user);
const history = useHistory();
const onLogin = () =>{
    history.push('/Signin')
}
return (
        <div className="header">
            <div className="view-header-home">
                <button className="btn-home" onClick={()=>{history.push('/Home')}}>
                    <img src={Logo} className="header-logo"/>
                    <label className="header-title">ARTEMIS</label>
                </button>
            </div>
            <div className="view-header-home">
                <input className="header-search" placeholder="Tìm thú cưng hoặc bác sĩ"/>
                <button className="btn1">
                    <img className="header-icon-search" src={Search}/>
                </button>
            </div>
            <div className="view-header-user">
            {/* <button className="btn1">
                    <ion-icon name="notifications-outline" style={{fontSize:'40px'}}> </ion-icon>
                        <Test></Test>
                    </button> */}
                    <Test></Test>
                <button className="btn1">
                    <ion-icon name="chatbubbles-outline" style={{fontSize:'40px'}}></ion-icon>
                </button>
                <button className="btn1">
                    <label className="user-title">  Chào </label>
                </button>
                <button className="btn1">
                    <ion-icon name="person-circle-outline" style={{fontSize:'40px'}}></ion-icon>
                </button>
               
            </div>
        </div>
        
)
}
export default Headerdocument