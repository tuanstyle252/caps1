import React from "react";
import './trangchu1.css'
import logo from './images/atermis.png'
import {Link} from 'react-router-dom'
import logo1 from './images/search.png'
import logo2 from './images/giaodien.png'
function trangchu1(props){
    return(
        <div class='container'>
                <div class='menu'>
                    <ul>
                        <li><img src={logo} alt='' class='logo' /></li>
                    </ul>
                    <ul>
                        <li><Link class='sua' to='/home'>Atermis</Link></li>
                    </ul>
                    <ul>
                        <li>
                            <input type='text' placeholder='Tim thông tin về vật nuôi'/>
                        </li>
                        <li>
                            <button><img class='hinh' src={logo1}/></button>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link class='sua1' to='/signin'>Đăng Nhập</Link>
                        </li>
                    </ul>
                    <ul>
                        <li><img class='hinh2' src={logo2}/></li>
                    </ul>
                </div>
                <div class='content'>
                    capsssss
                </div>
        </div>
        
    );
}
export default trangchu1;