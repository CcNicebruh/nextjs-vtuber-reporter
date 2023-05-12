import Image from 'next/image'
import { Inter } from 'next/font/google'

export default function slidebar(){
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
            <i>Home</i>
            <i>Terms</i>
            <i>Privacy</i>
            <i>About</i>
        </div>
    )
}