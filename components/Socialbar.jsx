import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineYoutube} from 'react-icons/ai'
import {SlSocialSpotify} from 'react-icons/Sl'
import {TbBrandGumroad} from 'react-icons/Tb'
import {SiBandcamp} from 'react-icons/Si'

const Socialbar = () => 
{
  return (
    <div className='fixed flex item-center justify-between w-[200px] z-100 my-4 right-[2rem] bottom-[1rem]'>
        <div className='rounded-full shadow-lg shadow-[#000000] p-3 cursor-pointer hover:scale-[103%] ease-in duration-100'>
            <a href='https://t.co/jY7BATnj5S' target="_blank">
                <SlSocialSpotify className=' scale-[150%]'/>
            </a>
        </div>
        <div className='rounded-full shadow-lg shadow-[#000000] p-3 cursor-pointer hover:scale-[103%] ease-in duration-100'>
            <a href='https://myntian.gumroad.com/' target="_blank">
                <TbBrandGumroad className=' scale-[180%]'/>
            </a>
        </div>
        <div className='rounded-full shadow-lg shadow-[#000000] p-3 cursor-pointer hover:scale-[103%] ease-in duration-100'>
            <a href='https://www.youtube.com/@Myntian' target="_blank">
                <AiOutlineYoutube className=' scale-[180%]'/>
            </a>
        </div>
        <div className='rounded-full shadow-lg shadow-[#000000] p-3 cursor-pointer hover:scale-[103%] ease-in duration-100'>
            <a href='https://myntian.bandcamp.com/' target="_blank">
                <SiBandcamp className=' scale-[150%]'/>
            </a>
        </div>
    </div>
    )
}

export default Socialbar