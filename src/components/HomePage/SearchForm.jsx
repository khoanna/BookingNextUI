import React, { useEffect, useRef, useState } from 'react';

const SearchForm = () => {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    useEffect(() => {
        const onClickOutside = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
        };
        const onEsc = (e) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('mousedown', onClickOutside);
        document.addEventListener('keydown', onEsc);
        return () => {
            document.removeEventListener('mousedown', onClickOutside);
            document.removeEventListener('keydown', onEsc);
        };
    }, []);

    return (
        <div
            onSubmit={(e) => e.preventDefault()}
            ref={wrapRef}
            className={`mx-auto max-w-[960px] overflow-hidden rounded-2xl border border-white/40 bg-white/80 backdrop-blur-md shadow-lg gap-3 ${open ? 'p-3 md:p-4' : ''}`}
        >

            {!open && (
                <div
                    onClick={() => setOpen(true)}
                    className={[
                        "flex items-center justify-center gap-2 rounded-lg bg-black text-white cursor-pointer   ",
                        "font-semibold text-sm",
                        "px-4 py-2 md:px-5 md:py-2.5",
                        "shadow-md hover:shadow-lg",
                        "transition-all duration-500 ease-out hover:opacity-90",
                        open
                            ? "translate-x-2 md:translate-x-4 opacity-0"
                            : "translate-x-0 opacity-100",
                        "max-md:w-auto"
                    ].join(' ')}
                    aria-expanded={open}
                >
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                    <span>Bạn muốn đi đâu?</span>
                </div>
            )}


            <div
                className={[
                    "overflow-hidden transition-all duration-500 ease-out",
                    open ? "max-w-[760px] max-h-[300px] opacity-100 translate-x-0" : "max-w-0 max-h-0 opacity-0 -translate-x-4 pointer-events-none"
                ].join(' ')}
            >
                <div className="grid md:grid-cols-3 gap-3 md:gap-4 p-1 text-black">
                    <div className={["transition-all duration-500", open ? "opacity-100 -translate-x-0 delay-100" : "opacity-0 -translate-x-3"].join(' ')}>
                        <label htmlFor="destinationInput" className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" /></svg>
                            Điểm đến
                        </label>
                        <input
                            list="destinations"
                            id="destinationInput"
                            type="text"
                            placeholder="Thành phố..."
                            className="mt-1.5 w-full rounded-lg border border-black px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black/20"
                            required
                        />
                        <datalist id="destinations">
                            <option value="Đà Nẵng" /><option value="Nha Trang" /><option value="Hà Nội" />
                            <option value="TP. HCM" /><option value="Bangkok" /><option value="Singapore" />
                            <option value="Hàn Quốc" /><option value="Triều tiên" />
                        </datalist>
                    </div>

                    <div className={["transition-all duration-500", open ? "opacity-100 -translate-x-0 delay-150" : "opacity-0 -translate-x-3"].join(' ')}>
                        <label htmlFor="checkIn" className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" /></svg>
                            Ngày đi
                        </label>
                        <input id="checkIn" type="date" className="mt-1.5 w-full rounded-lg border border-black px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black/20" />
                    </div>

                    <div className={["transition-all duration-500", open ? "opacity-100 -translate-x-0 delay-200" : "opacity-0 -translate-x-3"].join(' ')}>
                        <label htmlFor="checkOut" className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" /></svg>
                            Ngày về
                        </label>
                        <input id="checkOut" type="date" className="mt-1.5 w-full rounded-lg border border-black px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black/20" />
                    </div>

                    <div className={["md:col-span-3 flex items-center justify-end gap-2 transition-all duration-500", open ? "opacity-100 delay-300" : "opacity-0"].join(' ')}>
                        <div type="submit" className="rounded-lg bg-black cursor-pointer px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition">Tìm chuyến đi</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SearchForm;
