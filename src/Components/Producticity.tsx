import { useState } from 'react';
import GrowthGraph from "./GrowthGraph";
import OrbitIllustration from './OrbitIllustration';
export default function Producticity() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id='productivity' className='pb-30 sm:pb-40 '>
            <h2 className='mb-4 text-cyan-950 text-5xl text-center'>Get More Done In A Week</h2>
            <p className='mb-8 text-neutral-600 text-center'>Maximize your productivity with smarter tools designed to streamline <br />your workflow to automate tasks, stay organized</p>
            <ul className='flex flex-col md:grid md:grid-rows-2 md:grid-cols-2 gap-5 text-cyan-950'>
                <li className='pt-17 pb-8 bg-sky-300 rounded-xl flex flex-col justify-end items-center gap-y-13 group'>
                    <p className='text-8xl transition-transform duration-1200 group-hover:scale-140'>2x</p>
                    <p>Double Your Productivity</p>
                </li>
                <li className='pb-8 px-8 bg-sky-300 flex flex-col items-center justify-end rounded-xl'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <GrowthGraph isActive={isHovered} />
                    <p className='mt-8 text-center'>Efficiency Increase Per Transfer</p>
                </li>
                <li className='group pb-8 pt-10 bg-sky-300 rounded-xl flex flex-col items-center justify-between'>
                    <OrbitIllustration />
                    <p className=''>Centralize Your Finances</p>
                </li>
                <li className='pt-17 pb-8 bg-sky-300 rounded-xl  flex flex-col justify-end items-center gap-y-13 group'>
                    <p className='text-8xl transition-transform duration-1200 group-hover:scale-130'>130%</p>
                    <p>Double Your Productivity</p>
                </li>
            </ul>
        </section>
    )
}