import { Link, useNavigate } from "react-router-dom"
import HotelCard from "../Card/HotelCard"

const hotels = [
    {
        id: 1,
        stars: 4,
        isRecommended: true,
        img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1744266362/qsj8vz0bptxfirwamtx5.png",
        name: "Uzbanza Suited",
        location: "Nguyen Van Linh, Da Nang",
        rate: 4.5,
        price: 399
    },
    {
        id: 2,
        stars: 5,
        isRecommended: true,
        img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1744266362/qsj8vz0bptxfirwamtx5.png",
        name: "Uzbanza Suited",
        location: "Nguyen Van Linh, Da Nang",
        rate: 4.5,
        price: 399
    },
    {
        id: 3,
        stars: 5,
        isRecommended: false,
        img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1744266362/qsj8vz0bptxfirwamtx5.png",
        name: "Uzbanza Suited",
        location: "Nguyen Van Linh, Da Nang",
        rate: 4.5,
        price: 399
    },
    {
        id: 4,
        stars: 5,
        isRecommended: false,
        img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1744266362/qsj8vz0bptxfirwamtx5.png",
        name: "Uzbanza Suited",
        location: "Nguyen Van Linh, Da Nang",
        rate: 4.5,
        price: 399
    },
    {
        id: 4,
        stars: 5,
        isRecommended: false,
        img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1744266362/qsj8vz0bptxfirwamtx5.png",
        name: "Uzbanza Suited",
        location: "Nguyen Van Linh, Da Nang",
        rate: 4.5,
        price: 399
    },
    {
        id: 4,
        stars: 5,
        isRecommended: false,
        img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1744266362/qsj8vz0bptxfirwamtx5.png",
        name: "Uzbanza Suited",
        location: "Nguyen Van Linh, Da Nang",
        rate: 4.5,
        price: 399
    },
    {
        id: 4,
        stars: 5,
        isRecommended: false,
        img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1744266362/qsj8vz0bptxfirwamtx5.png",
        name: "Uzbanza Suited",
        location: "Nguyen Van Linh, Da Nang",
        rate: 4.5,
        price: 399
    },
    {
        id: 4,
        stars: 5,
        isRecommended: false,
        img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1744266362/qsj8vz0bptxfirwamtx5.png",
        name: "Uzbanza Suited",
        location: "Nguyen Van Linh, Da Nang",
        rate: 4.5,
        price: 399
    }
]

const Rooms = () => {
    const navigate = useNavigate();
    return (
        <div className='p-12 md:px-24'>
            <div>
                <h1 className='text-3xl pb-2 font-semibold text-center'>Featured Destination</h1>
                <p className='text-[#6a7282e6] m-auto text-center text-sm max-w-lg'>Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {hotels.map((hotel) => <HotelCard id={hotel.id} isRecommended={hotel.isRecommended} img={hotel.img} stars={hotel.stars} name={hotel.name} location={hotel.location} rate={hotel.rate} price={hotel.price} />)}
            </div>

            <div className="relative flex items-center mt-12">
                <div className="flex-grow border-t border-gray-300"></div>

                <Link
                    to="/hotel"
                    className="absolute cursor-pointer left-1/2 -translate-x-1/2 bg-white px-6 py-2 
                    border border-gray-300 rounded-xl text-gray-500 text-sm font-medium
                    shadow-sm hover:shadow-md transition-all "
                >
                    Tìm khách sạn tại điểm đến của bạn
                </Link>

            </div>


        </div>
    )
}

export default Rooms