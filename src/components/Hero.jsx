import React from 'react'
import SearchForm from './SearchForm'
import { assets } from '../assets'

const Hero = () => {
    return (
        <div className={`flex text-white flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 bg-black/30 bg-blend-multiply bg-no-repeat bg-cover bg-center h-screen`} style={{ backgroundImage: `url(${assets.heroImage})` }}>
            <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full'>
                Khám phá thế giới dễ dàng hơn
            </p>
            <h1 className='text-2xl md:text-5xl md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>
                Booking Next
            </h1>
            <p className='max-w-130 mt-2 text-sm md:text-base font-semibold'>
                Từ vé máy bay đến tour trọn gói tất cả chỉ trong một chạm.
                Trải nghiệm nhanh chóng và an toàn với hệ thống thanh toán linh hoạt qua ngân hàng hoặc tiền điện tử.
            </p>
            <div className='mt-4'>
                <SearchForm />
            </div>
        </div>
    )
}

export default Hero