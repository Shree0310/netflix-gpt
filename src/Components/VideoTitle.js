const VideoTitle = ({title, overview})=>{
    return (
    <div className="py-36 w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-md w-1/4 py-6">{overview}</p>
        <div className=" flex">
            <button className="bg-gray-300 flex border-gray-500 text-black py-2 px-6 rounded-lg m-2 shadow-sm font-semibold hover:opacity-50 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
                Play
            </button>
            <button className="bg-gray-400 text-center flex text-white py-2 px-6 my-2  rounded-lg shadow-sm font-bold hover:opacity-40 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
                More Info
            </button>
        </div>
        
    </div>)
}

export default VideoTitle;