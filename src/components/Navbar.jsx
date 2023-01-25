import {FaTwitter,FaReddit,FaDiscord,FaTelegram } from "react-icons/fa";

function Navbar()
{
    return(
        <div>
            <nav class="px-2 py-2 absolute w-full z-20 top-0 left-0">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center">
                <img src="\image\Anifinity-1 (1).png" class="h-12 mr-3" alt="Logo"/>
                <span class="self-center text-2xl font-black whitespace-nowrap dark:text-white">Anifinity</span>
            </a>
            <div class="flex md:order-2">
                <button type="button" class="text-black bg-green-500 hover:bg-green-600 font-normal rounded-lg text-md px-4 py-2 text-center ">Login</button>
                
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
