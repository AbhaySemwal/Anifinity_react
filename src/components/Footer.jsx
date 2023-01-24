import {FaTwitter,FaReddit,FaDiscord,FaTelegram } from "react-icons/fa";

function Footer()
{
    return(
        <div className="h-44 bg-gray-800">
        <div className="pt-14 flex justify-center items-center">
            <div className="flex gap-10 flex-row">
                <a href="#" class="block py-2 pl-3 pr-4 text-4xl md:text-red-700 hover:text-red-600 md:p-0" aria-current="page"><FaReddit/></a>
                <a href="#" class="block py-2 pl-3 pr-4 text-4xl md:text-blue-700 hover:text-blue-600 md:p-0" aria-current="page"><FaDiscord/></a>
                <a href="#" class="block py-2 pl-3 pr-4 text-4xl md:text-blue-600 hover:text-blue-500 md:p-0" aria-current="page"><FaTelegram/></a>
                <a href="#" class="block py-2 pl-3 pr-4 text-4xl md:text-blue-500 hover:text-blue-400 md:p-0" aria-current="page"><FaTwitter/></a>
            </div>
        </div>
        
        <div className="pt-8 flex justify-center items-center">
            <h1 className="text-gray-400">© Copyright Abhay Semwal</h1>
        </div>
        </div>
    );
}
export default Footer;