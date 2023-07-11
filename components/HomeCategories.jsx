import React from 'react'

const HomeCategories = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-8 gap-4 lg:grid-cols-7 cursor-pointer px-10">
            <div className="flex flex-row items-center">
                <div className="flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-histogram"
                             width="28" height="28" viewBox="0 0 24 24" stroke="#2E8DFF" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 3v18h18"/>
                            <path d="M20 18v3"/>
                            <path d="M16 16v5"/>
                            <path d="M12 13v8"/>
                            <path d="M8 16v5"/>
                            <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5"/>
                        </svg>
                    </div>
                    <p className="text-sm font-bold">Sales</p>
                </div>
                <div className="flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users-group"
                             width="28" height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
                            <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"/>
                            <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
                            <path d="M17 10h2a2 2 0 0 1 2 2v1"/>
                            <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
                            <path d="M3 13v-1a2 2 0 0 1 2 -2h2"/>
                        </svg>
                    </div>
                    <p className="text-sm font-bold">HR</p>
                </div>
                <div className="flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scribble"
                             width="28" height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5"/>
                        </svg>
                    </div>
                    <p className="text-sm font-bold">Drawing</p>
                </div>
                <div className="flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-database"
                             width="28" height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"/>
                            <path d="M4 6v6a8 3 0 0 0 16 0v-6"/>
                            <path d="M4 12v6a8 3 0 0 0 16 0v-6"/>
                        </svg>
                    </div>
                    <p className="text-sm font-bold flex-items">Big Data</p>
                </div>
                <div className="flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wand" width="28"
                             height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 21l15 -15l-3 -3l-15 15l3 3"/>
                            <path d="M15 6l3 3"/>
                            <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/>
                            <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/>
                        </svg>
                    </div>
                    <p className="text-sm font-bold">Design</p>
                </div>
                <div className="flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bulb" width="28"
                             height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/>
                            <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/>
                            <path d="M9.7 17l4.6 0"/>
                        </svg>
                    </div>
                    <p className="text-sm font-bold">Marketing</p>
                </div>
                <div className="flex flex-col items-center px-1 py-2 m-4 rounded-lg shadow category-icon--container hover:bg-[#CBE1FA] hover:border-blue-500 border hover:text-[#2E8DFF] text-[#616161] bg-[#fbfbfb]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sparkles"
                             width="28" height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path
                                d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"/>
                        </svg>
                    </div>
                    <p className="text-sm font-bold">Astronomy</p>
                </div>
            </div>
        </div>
    );
};


export default HomeCategories;