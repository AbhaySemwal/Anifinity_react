import {FaTwitter,FaReddit,FaDiscord,FaTelegram } from "react-icons/fa";
import slides from './anidata';
import React, { useState } from 'react';
import { FaClock ,FaCalendar,FaPlayCircle} from 'react-icons/fa';
function Navbar()
{
    const [showModal, setShowModal] = React.useState(false);
    const [showRModal, setShowRModal] = React.useState(false);
  
    return(
        <div>
            <nav class="px-2 py-2 absolute w-full z-20 top-0 left-0">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center">
                <img src="\image\Anifinity-1 (1).png" class="h-12 mr-3" alt="Logo"/>
                <span class="self-center text-2xl font-black whitespace-nowrap dark:text-white">Anifinity</span>
            </a>
            <div class="flex md:order-2">
                <button type="button" onClick={() => setShowModal(true)} class="text-black bg-green-500 hover:bg-green-600 font-normal rounded-lg text-md px-4 py-2 text-center ">Login</button>

        {showModal ? (
        <>
          <div
            className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
           
                <section class="">
                
                <div class="flex flex-col items-center justify-center px-6 py-8 my-10 mx-8 lg:py-0">
                
                    <div class=" w-full shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div class="modal bg-gray-700 rounded-lg p-6 space-y-4 md:space-y-6 sm:p-8">
                        <button
                            className="relative border-0 text-slate-100 float-right left-4 bottom-6 text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}>
                            <span className="text-slate-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                            </span>
                        </button>
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm pl-16 first-letter:font-medium text-primary-600 hover:underline text-blue-500">Forgot password?</a>
                                </div>
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium bg-blue-600 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p class="text-sm font-light  dark:text-gray-400">
                                <p className="text-center pb-4">------ OR ------</p>
                                <div className="text-center">
                                <button type="button" class=" text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-14 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                Sign in with Google
                                </button>
                                <button type="button" class=" text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-14 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                <svg class="w-5 h-5 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                Sign in with Apple
                                </button>
                                </div>
                                    Don’t have an account yet? <a href="#" onClick={() => {setShowRModal(true)}} class="font-medium text-blue-500 text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                    {showRModal ? (
                                    <>
                                    <div
                                        className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                    
                                            <section class="">
                                            
                                            <div class="flex flex-col items-center justify-center px-6 py-8 my-10 mx-8 lg:py-0">
                                            
                                                <div class=" w-full shadow md:mt-0 sm:max-w-md xl:p-0">
                                                    <div class="modal bg-gray-700 rounded-lg p-6 space-y-4 md:space-y-6 sm:p-8">
                                                    <button
                                                        className="relative border-0 text-slate-100 float-right left-4 bottom-6 text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowRModal(false)}>
                                                        <span className="text-slate-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                        </span>
                                                    </button>
                                                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                                            Sign in to your account
                                                        </h1>
                                                        <form class="space-y-4 md:space-y-6" action="#">
                                                            <div>
                                                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                                                            </div>
                                                            <div>
                                                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                                            </div>
                                                            
                                                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium bg-blue-600 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                                                            <p class="text-sm font-light  dark:text-gray-400">
                                                            <p className="text-center pb-4">------ OR ------</p>
                                                            <div className="text-center">
                                                            <button type="button" class=" text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-14 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                                            <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                                            Sign up with Google
                                                            </button>
                                                            <button type="button" class=" text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-14 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                                            <svg class="w-5 h-5 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                                            Sign up with Apple
                                                            </button>
                                                            </div>
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            </section>
                                        </div>
                                
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                ) : null}

                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                </section>
              </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

            <form class="flex pl-2 items-center">   
                <div class="relative w-full">
                    <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-full w-36 py-2.5 px-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Anime..." required/>
                </div>
                <button type="submit" class="inline-flex items-center py-2.5 px-2.5 ml-2 text-sm font-medium text-white bg-blue-200 rounded-lg border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </form>
            </div>
            <div class="lg:visible sm:invisible items-center justify-between hidden w-full md:flex md:w-auto lg:pl-36 md:order-1" id="navbar-sticky">
                <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-xl md:text-red-700 hover:text-red-600 md:p-0" aria-current="page"><FaReddit/></a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-xl md:text-blue-700 hover:text-blue-600 md:p-0" aria-current="page"><FaDiscord/></a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-xl md:text-blue-600 hover:text-blue-500 md:p-0" aria-current="page"><FaTelegram/></a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-xl md:text-blue-500 hover:text-blue-400 md:p-0" aria-current="page"><FaTwitter/></a>
                </li>
                </ul>
            </div>
            </div>
            </nav>
        </div>
    )
}
export default Navbar;
