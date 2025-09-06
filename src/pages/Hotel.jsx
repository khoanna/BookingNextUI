import { Star, MapPin, Wifi, Utensils, Waves } from "lucide-react";

export default function RoomDetail() {
  return (
    <div className="min-h-[70vh] px-4 md:px-16 lg:px-24 xl:px-32 py-28 md:py-35">
      {/* Title + Discount */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair">
          Urbanza Suites <span className="font-inter text-sm">(Single Bed)</span>
        </h1>
        <span className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
          20% OFF
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        {[...Array(4)].map((_, i) => (
          <Star key={i} size={18} className="text-orange-500 fill-orange-500" />
        ))}
        <Star size={18} className="text-orange-500" />
        <p className="ml-2">200+ reviews</p>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1 text-gray-500 mt-2">
        <MapPin size={18} />
        <span>Main Road 123 Street, 23 Colony</span>
      </div>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <img
          className="lg:w-1/2 w-full rounded-xl shadow-lg object-cover"
          src="https://res.cloudinary.com/djbvf02yt/image/upload/v1744266199/ohaat1anjxmulytlaz7d.png"
          alt="Main Room"
        />
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {/* Thumbnail images */}
          {["s6xhgewuv9sf3c1jnlik", "ohaat1anjxmulytlaz7d", "mvotjypbous0yq3nlp5o", "cetsonjlkzinfe0itazq"].map((img, i) => (
            <img
              key={i}
              className="w-full rounded-xl shadow-md object-cover cursor-pointer"
              src={`https://res.cloudinary.com/djbvf02yt/image/upload/v1744266199/${img}.png`}
              alt="Room Thumbnail"
            />
          ))}
        </div>
      </div>

   <div className="flex flex-col md:flex-row md:justify-between mt-10">
      {/* Left side */}
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl font-playfair">
          Experience Luxury Like Never Before
        </h1>

        {/* Facilities */}
        <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
            <Wifi className="w-5 h-5" />
            <p className="text-xs">Free WiFi</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
            <Utensils className="w-5 h-5" />
            <p className="text-xs">Room Service</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
            <Waves className="w-5 h-5" />
            <p className="text-xs">Pool Access</p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <p className="text-2xl font-medium">$199/night</p>
    </div>
    </div>
  );
}
