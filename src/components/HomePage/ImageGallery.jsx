import React from 'react'

const ImageGallery = () => {
    return (
        <div className="my-12">
            <h1 className="text-3xl font-semibold text-center mx-auto">Our Latest Creations</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works -
                each piece crafted with intention, emotion, and style.</p>

            <div className="flex flex-col md:flex-row items-center gap-6 md:h-[450px] w-full md:w-10/12 mt-10 mx-auto">
                <div className="relative group flex-grow transition-all md:w-56 w-10/12 md:h-[450px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center  rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
                        src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-t-xl md:rounded-t-none md:rounded-l-xl">
                        <h1 className="text-3xl">Prompt engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                    </div>
                </div>
                <div className="relative group flex-grow transition-all md:w-56 w-10/12 md:h-[450px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-right"
                        src="https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Data scientists</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                    </div>
                </div>
                <div className="relative group flex-grow transition-all md:w-56 w-10/12 md:h-[450px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Software engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                    </div>
                </div>
                <div className="relative group flex-grow transition-all md:w-56 w-10/12 md:h-[450px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Software engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                    </div>
                </div>
                <div className="relative group flex-grow transition-all md:w-56 w-10/12 md:h-[450px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center rounded-b-xl md:rounded-bl-none md:rounded-r-xl"
                        src="https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-b-xl md:rounded-bl-none md:rounded-r-xl">
                        <h1 className="text-3xl">Software engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery