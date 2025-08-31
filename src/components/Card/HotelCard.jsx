import { Link } from 'react-router-dom'
import { Star, MapPin } from 'lucide-react'

const HotelCard = ({ id, isRecommended, img, name, location, stars, rate, price }) => {
    return (
        <Link to={`/hotel/${id}`} className="group relative block max-w-sm w-full overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden">
                <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {isRecommended && (
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow">
                        Best Seller
                    </span>
                )}
            </div>

            <div className="p-4 flex flex-col gap-2">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: stars }).map((_, i) => (
                            <Star key={i} size={14} fill="gold" stroke="none" />
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin size={14} className="text-gray-400" />
                    <span className="truncate">{location}</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm">
                        <span className="text-gray-700">Rate: {rate} / 10</span>
                    </div>
                    <p className="text-lg font-bold text-orange-400">${price}</p>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard
