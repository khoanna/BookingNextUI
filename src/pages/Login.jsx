import { assets } from '../assets'
import { useEffect, useState } from 'react';
import GoogleLogin from '../components/GoogleLogin';
import { useGetOtp } from '../services/useGetOTP';
import { useLogin } from '../services/useLogin';
import { useRegister } from '../services/useRegister';
import Notification from '../components/Notification';
import { AnimatePresence } from 'framer-motion';
import { isValidEmailCommon } from '../utils/validateMail';


export default function Login() {
    const { getOtp } = useGetOtp();
    const { registerLoading, register } = useRegister();

    const [status, setStatus] = useState('login');

    const [OtpCountdown, setOtpCountdown] = useState(undefined);

    const [toast, setToast] = useState({
        type: "success",
        message: "",
        show: false,
    });

    // Login State
    const [loginMail, setLoginMail] = useState('');
    const [loginPass, setLoginPass] = useState('');

    // Register State
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (OtpCountdown <= 0) return;

        const timer = setInterval(() => {
            setOtpCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return undefined;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [OtpCountdown]);

    const showToast = (type, message) => {
        setToast({ type, message, show: true });
        setTimeout(() => setToast((t) => ({ ...t, show: false })), 3000);
    };

    const handleGetOtp = async () => {
        if (!isValidEmailCommon(email)) {
            showToast('error', 'Vui lòng nhập mail hợp lệ');
            return;
        }
        setOtpCountdown(60);
        await getOtp({ email: email });
        showToast('success', 'Kiểm tra mail để nhận OTP');
    }

    const handleRegister = async () => {
        if (!email || !otp || !password || !confirmPassword) {
            showToast('error', 'Vui lòng nhập đủ thông tin để tiếp tục')
            return;
        }
        if (password !== confirmPassword) {
            showToast('error', 'Mật khẩu không khớp vui lòng thử lại')
            return;
        }
        const respone = await register({ email, password, confirmPassword, otp });
        const data = await respone.json();
        setOtp('');
        showToast(respone.status == 200 ? 'success' : 'error', data.message);
    }

    const handleLogin = async () => {
        if (!isValidEmailCommon(loginMail)) {
            showToast('error', 'Vui lòng nhập mail hợp lệ');
            return;
        }
        if (!loginMail || !loginPass) {
            showToast('error', 'Vui lòng nhập đủ thông tin để tiếp tục')
            return;
        }
    }

    return (
        <div className="flex min-h-screen w-full">
            <div className="fixed top-5 right-5 z-50 space-y-3">
                <AnimatePresence>
                    {toast.show && (
                        <Notification
                            type={toast.type}
                            message={toast.message}
                            onClose={() => setToast((t) => ({ ...t, show: false }))}
                        />
                    )}
                </AnimatePresence>
            </div>
            <div className="md:w-1/2 hidden md:inline-block">
                <img className="h-screen w-full bg-center" src={assets.loginImage} alt="leftSideImage" />
            </div>

            <div className="md:w-1/2 w-full flex flex-col items-center justify-center">
                <button
                    onClick={() => showToast("success", "Đăng nhập thành công!")}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Show Success
                </button>
                <button
                    onClick={() => showToast("error", "Có lỗi xảy ra!")}
                    className="ml-2 px-4 py-2 bg-red-600 text-white rounded"
                >
                    Show Error
                </button>

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
                            <svg width="20" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                            </svg>
                            <input value={loginMail} onChange={e => setLoginMail(e.target.value)} type="email" placeholder="Email id" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="20" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                            </svg>
                            <input value={loginPass} onChange={e => setLoginPass(e.target.value)} type="password" placeholder="Mật khẩu" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>
                        <div onClick={handleLogin} className="flex items-center justify-center cursor-pointer mt-8 w-full h-10 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                            Đăng nhập
                        </div>
                        <div className="w-full flex items-center justify-between mt-8 px-2 text-gray-500">
                            <p className="text-gray-500/90 text-sm">Chưa có tài khoản? <span className="text-indigo-400 cursor-pointer" onClick={() => setStatus('register')} >Đăng kí</span></p>
                            <div className="text-indigo-400 text-sm cursor-pointer" onClick={() => setStatus('forgot')}>Quên mật khẩu</div>
                        </div>
                    </div>
                )}

                {status == 'forgot' && (
                    <div className="md:w-96 w-80 flex flex-col items-center justify-center">
                        <h2 className="text-4xl text-gray-900 font-medium">Quên mật khẩu</h2>
                        <p className="text-sm text-gray-500/90 mt-3">Đặt lại mật khẩu của bạn!</p>

                        <div className="flex items-center w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2 mt-5">
                            <svg width="20" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                            </svg>
                            <input type="email" placeholder="Email" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <input placeholder="Mã OTP" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                            <div className='text-xs w-4/12 text-right mr-4 cursor-pointer text-gray-500 hover:text-black'>
                                {OtpCountdown ? OtpCountdown : "Nhận mã"}
                            </div>
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="20" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                            </svg>
                            <input type="password" placeholder="Mật khẩu mới" className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="20" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <svg width="20" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" />
                            </svg>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>
                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <input placeholder="Mã OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                            <button onClick={handleGetOtp} disabled={OtpCountdown} className='text-xs text-center w-4/12 mr-4 cursor-pointer text-gray-500 hover:text-black'>
                                {OtpCountdown ? OtpCountdown : "Nhận mã"}
                            </button>
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="20" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                            </svg>
                            <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>

                        <div className="flex items-center mt-6 w-full bg-transparent border-2 border-gray-300 focus-within:border-gray-400 h-12 rounded-full overflow-hidden pl-6 gap-2">
                            <svg width="20" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" />
                            </svg>
                            <input type="password" placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="bg-transparent text-gray-500 placeholder-gray-500/80 outline-none text-sm w-full h-full" />
                        </div>
                        <button onClick={handleRegister} disabled={registerLoading} className="flex items-center justify-center cursor-pointer disabled:cursor-auto mt-2 w-full h-10 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity">
                            {registerLoading ? (<svg
                                className="animate-spin h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"
                                />
                            </svg>) : "Đăng kí"}
                        </button>
                        <p className="text-gray-500/90 text-sm mt-4">Đã có tài khoản? <span className="text-indigo-400 hover:underline cursor-pointer" onClick={() => setStatus('login')} >Đăng nhập</span></p>
                    </div>
                )}

            </div>
        </div>
    );
};