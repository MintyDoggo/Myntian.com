import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineYoutube} from 'react-icons/ai'
import {SlSocialSpotify} from 'react-icons/Sl'
import {TbBrandGumroad} from 'react-icons/Tb'
import {SiBandcamp} from 'react-icons/Si'
import {FaPatreon} from 'react-icons/Fa'


const navbar = () => 
{
    const [nav, setNav] = useState(false)

    const handleNav = () =>
    {
        setNav(!nav)
    }


  return (
    <div className='fixed w-full h-40 shadow-xl z-[100] backdrop-blur-[50px] bg-[#00000078]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src="/../public/assets/dog.png" alt='/' width='125' height='50' />
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 uppercase hover:border-b text-2xl'>Home</li>
                    </Link>
                    <Link href='/store'>
                        <li className='ml-10 uppercase hover:border-b text-2xl' href="/posts">Store</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden cursor-pointer'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
        
        <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/50' : ''}>
            <div 
                className=
                {
                    nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#38404a] p-10 ease-in duration-300' 
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src='/../public/assets/dog.png' width='87' height='35' alt='/'/>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-[#000000] p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Hello! this is a test and i need long text for it</p>
                    </div>
                </div>
                <div>
                    <ul className='uppercase flex flex-col'>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/store'>
                            <li className='py-4 text-sm'>Store</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#bc7c86]'>My Socials</p>
                        <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
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
                            <div className='rounded-full shadow-lg shadow-[#000000] p-3 cursor-pointer hover:scale-[103%] ease-in duration-100'>
                                <a href='https://www.patreon.com/Myntian' target="_blank">
                                    <FaPatreon className=' scale-[125%]'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default navbar