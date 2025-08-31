const DiscountCard = ({ name, description, amount, expire, img }) => {
    
    return (
        <div className="group m-auto relative flex flex-col justify-end overflow-hidden rounded-xl shadow-lg w-full max-w-sm h-64 cursor-pointer bg-cover"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>

            <p className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-md">
                {amount}% OFF
            </p>

            <div className="relative z-10 p-5 text-white">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-sm text-gray-200 mt-1">{description}</p>
                <p className="text-xs text-gray-300 mt-3">Expires: {expire}</p>
            </div>
        </div>
    );
};

export default DiscountCard;
