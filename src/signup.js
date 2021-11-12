import React from "react";
import './tuan.css'
import logo from './images/atermis.png'
import { Link } from "react-router-dom";

function signup(pops){
    return(
        <div className="signup">
            <div class="h-sceen flex items-center justify-center ">
        <div class="p-2 lg:w-2/3">
            <div class="block lg:flex bg-white lg:shadow-lg rounded-lg">
                <div class="w-full lg:w-1/3 flex lg:border-r border-gray-200">
                    <div class="m-auto rounded-full">
                        <p class="flex items-base pt-10 lg:p-2 -mb-10 lg:-mb-0">
                            <img src={logo} alt="" class="w-12 lg:w-48"/>
                            <div class="block lg:hidden text-2xl text-primary hover:text-primary tracking-wide font-semibold uppercase">Parsinta</div>
                        </p>
                    </div>
                </div>
                <div class="w-full lg:w-2/3 px-6 py-16">
                    <form>
                        <div class="mb-4">
                            <input type='text' name="firstname" id="lastname" placeholder="Họ Và Tên" class="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" autoComplete="given-name" required/>
                        </div>
                        <div class="mb-4">
                            <input type="text" name="lastname" id="lastname" placeholder="Tên Đăng nhập" class="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" autoComplete="family-name" required/>
                            
                        </div>
                        <div class="mb-4">
                            <input type="password" name="password" id="password" placeholder="Mật khẩu " class="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" autocomplete="email" required/>
                            
                        </div>
                        <div class="mb-4">
                            <input type="password" name="authopassword" id="authopassword" placeholder="Nhập Lại Mật khẩu" class="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" autocomplete="current-password" required/>
                        </div>
                        
                        <div class="mb-4">
                            <input type='text' name="phone" id="phone" placeholder="số điện thoại" class="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" autocomplete="current-password" required/>
                        </div>
                        <div class="block md:flex items-center justify-between">
                            <button type="submit" class="align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg">Đăng kí</button>
                           
                        </div>
                        <Link  class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black "  to="/signin"  >Bạn đã có tài khoản? SigIn</Link>


                    </form>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default signup;