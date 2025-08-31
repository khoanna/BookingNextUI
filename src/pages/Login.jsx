import { assets } from '../assets'
import { useState } from 'react';
import GoogleLogin from '../components/GoogleLogin';


export default function Login() {
    const [status, setStatus] = useState('login');

    return (
        <div className="flex h-screen w-full">
            <div className="md:w-1/2 hidden md:inline-block">
                <img className="h-full w-full bg-center" src={assets.loginImage} alt="leftSideImage" />
            </div>

            <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
                {status == 'login' && (
                    <div className="md:w-96 w-80 flex flex-col items-center justify-center">
                        <h2 className="text-4xl text-gray-900 font-medium">Đăng nhập</h2>
                        <p className="text-sm text-gray-500/90 mt-3">Chào mừng trở lại Booking Next!</p>

                        <GoogleLogin />

                        <div className="flex items-center gap-4 w-full my-5">
                            <div className="w-full h-px bg-gray-300/90"></div>
                            <p className="w-full text-nowrap text-sm text-gray-500/90">hoặc đăng nhập với email</p>
                            <div className="w-full h-px bg-gray-300/90"></div>
                        </div>

                        <div className="flex items-center w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                            </svg>
                            <input type="email" placeholder="Email id" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                            </svg>
                            <input type="password" placeholder="Mật khẩu" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>

                        <div className="w-full flex items-center justify-between mt-8 px-2 text-gray-500">
                            <div className="flex items-center gap-2">
                                <input className="h-5" type="checkbox" id="checkbox" />
                                <label className="text-sm" htmlFor="checkbox">Lưu mật khẩu</label>
                            </div>
                            <div className="text-sm underline cursor-pointer" onClick={() => setStatus('forgot')}>Quên mật khẩu</div>
                        </div>

                        <div className="flex items-center justify-center cursor-pointer mt-8 w-full h-10 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                            Đăng nhập
                        </div>
                        <p className="text-gray-500/90 text-sm mt-4">Chưa có tài khoản? <span className="text-indigo-400 hover:underline cursor-pointer" onClick={() => setStatus('register')} >Đăng kí</span></p>
                    </div>
                )}

                {status == 'forgot' && (
                    <div className="md:w-96 w-80 flex flex-col items-center justify-center">
                        <h2 className="text-4xl text-gray-900 font-medium">Quên mật khẩu</h2>
                        <p className="text-sm text-gray-500/90 mt-3">Đặt lại mật khẩu của bạn!</p>

                        <div className="flex items-center w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2 mt-5">
                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                            </svg>
                            <input type="email" placeholder="Email" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <input placeholder="Mã OTP" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                            <div className='text-xs w-4/12 text-right mr-4 cursor-pointer text-gray-500 hover:text-black'>
                                Nhận Mã
                            </div>
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                            </svg>
                            <input type="password" placeholder="Mật khẩu mới" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                            </svg>
                            <input type="password" placeholder="Xác nhận mật khẩu mới" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>

                        <div className="flex items-center justify-center cursor-pointer mt-8 w-full h-10 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                            Đổi mật khẩu
                        </div>
                        <p className="text-gray-500/90 text-sm mt-4">Đã có tài khoản? <span className="text-indigo-400 hover:underline cursor-pointer" onClick={() => setStatus('login')} >Đăng nhập</span></p>

                    </div>
                )}

                {status == 'register' && (
                    <div className="md:w-96 w-80 flex flex-col items-center justify-center">
                        <h2 className="text-4xl text-gray-900 font-medium">Đăng kí</h2>
                        <p className="text-sm text-gray-500/90 mt-3">Du lịch dễ dàng cùng Booking Next!</p>

                        <GoogleLogin />

                        <div className="flex items-center gap-4 w-full my-5">
                            <div className="w-full h-px bg-gray-300/90"></div>
                            <p className="w-full text-nowrap text-sm text-gray-500/90">hoặc bắt đầu với email</p>
                            <div className="w-full h-px bg-gray-300/90"></div>
                        </div>

                        <div className="flex items-center w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                            </svg>
                            <input type="email" placeholder="Email id" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>
                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <input placeholder="Mã OTP" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                            <div className='text-xs w-4/12 text-right mr-4 cursor-pointer text-gray-500 hover:text-black'>
                                Nhận Mã
                            </div>
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                            </svg>
                            <input type="password" placeholder="Mật khẩu" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                            </svg>
                            <input type="password" placeholder="Xác nhận mật khẩu " className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>

                        <div className="flex items-center justify-center cursor-pointer mt-8 w-full h-10 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                            Đăng kí
                        </div>
                        <p className="text-gray-500/90 text-sm mt-4">Đã có tài khoản? <span className="text-indigo-400 hover:underline cursor-pointer" onClick={() => setStatus('login')} >Đăng nhập</span></p>
                    </div>
                )}

            </div>
        </div>
    );
};