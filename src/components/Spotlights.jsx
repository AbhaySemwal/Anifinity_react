import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FaClock ,FaCalendar,FaPlayCircle} from 'react-icons/fa';
import slides from './anidata';
function Spotlights() {
  const [showModal, setShowModal] = React.useState(false);
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return (
    <div className='group'>
      <div className='spotlights h-[45rem] w-full m-auto absolute'>
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})`}}
        className='w-full h-full bg-center bg-cover duration-500'>
        </div>
    </div>
    <div className='justify-center h-60 relative items-center lg:pr-96 md:pr-60 sm:pr-36 pl-20 top-60'>
    <div className=''>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
      <p className='text-green-400 lg:text-xl md:text-base sm:text-sm pb-6'>#{currentIndex+1} Spotlight</p>
      <span className=' text-white lg:text-5xl md:text-4xl sm:text-3xl font-normal'>{slides[currentIndex].title}</span>
      <div class="flex py-2 pt-4 lg:text-sm md:text-xs sm:text-sm text-white">
        <span className='flex pr-2'><span className='pt-0.5 pr-1'><FaPlayCircle/></span> TV</span>
        <span className='flex pr-2'><span className='pt-0.5 px-1'><FaClock/></span>{slides[currentIndex].time}</span>
        <span className='flex'><span className='pt-0.5 px-1'><FaCalendar/></span>{slides[currentIndex].date}</span>
      </div>
      <p class="text-white lg:text-base md:text-sm sm:text-sm lg:pr-96 md:pr-60 sm:pr-36 ">{slides[currentIndex].cont}</p>
      <div className='flex pt-4'>
        <button type="button" class=" bg-green-500 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"><span className='flex'><span className='pt-0.5 pr-1'><FaPlayCircle/></span>Preview</span></button>
        <div>
          <button type="button" onClick={() => setShowModal(true)} class="text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-600 dark:focus:ring-gray-700">Detail ›</button>
        </div>
      </div>
      <>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="modal relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 bg-black rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-100 rounded-t">
                  <h3 className="text-3xl text-green-500 font-semibold">
                  {slides[currentIndex].title}
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-slate-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-slate-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-100 text-base leading-relaxed">
                  {slides[currentIndex].detail}
                  </p>
                  <div className='text-green-500 text-sm'>
                  <p><span className='font-black text-red-700'>Japanese : </span>{slides[currentIndex].japanese}</p> 
                  <p><span className='font-black text-red-700'>Aired : </span>{slides[currentIndex].aired}</p> 
                  <p><span className='font-black text-red-700'>Premiered : </span>{slides[currentIndex].premiered}</p> 
                  <p><span className='font-black text-red-700'>Status : </span>{slides[currentIndex].status}</p> 
                  <p><span className='font-black text-red-700'>Imdb : </span>{slides[currentIndex].imdb}</p> 
                  <p><span className='font-black text-red-700'>Genres : </span>{slides[currentIndex].genre}</p> 
                  <p><span className='font-black text-red-700'> Produced by : </span>{slides[currentIndex].producer}</p> 
                  <p><span className='font-black text-red-700'>Studio : </span>{slides[currentIndex].studio}</p>
                  </div> 
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-100 rounded-b">
                  <button
                    className="bg-green-500 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"  onClick={() => setShowModal(false)}><span className='flex'><span className='pt-0.5 pr-1'><FaPlayCircle/></span>Preview</span></button>
                  <button
                    className="text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
    </div>
    
    </div>
  );
}

export default Spotlights;
