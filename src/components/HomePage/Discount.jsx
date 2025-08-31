import DiscountCart from "../Card/DiscountCart"

const discounts = [
    {
        id: 1,
        img: "https://hb-gs.vercel.app/assets/exclusiveOfferCardImg1-Cbb4hi6M.png",
        name: "Summer Escape Package",
        description: "Enjoy a complimentary night and daily breakfast",
        amount: 10,
        expire: "20 days"
    },
    {
        id: 2,
        img: "https://hb-gs.vercel.app/assets/exclusiveOfferCardImg1-Cbb4hi6M.png",
        name: "Summer Escape Package",
        description: "Enjoy a complimentary night and daily breakfast",
        amount: 10,
        expire: "20 days"
    },
    {
        id: 3,
        img: "https://hb-gs.vercel.app/assets/exclusiveOfferCardImg1-Cbb4hi6M.png",
        name: "Summer Escape Package",
        description: "Enjoy a complimentary night and daily breakfast",
        amount: 10,
        expire: "20 days"
    }
]

const Discount = () => {
    return (
        <div className='p-12 md:px-24'>
            <div>
                <h1 className='text-3xl pb-2 font-semibold'>Featured Destination</h1>
                <p className='text-[#6a7282e6] text-sm max-w-lg'>Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {discounts.map((discount) => <DiscountCart name={discount.name} description={discount.description} amount={discount.amount} expire={discount.expire} img={discount.img}/>)}
            </div>
        </div>
    )
}

export default Discount