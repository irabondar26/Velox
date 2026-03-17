import { offerings, info } from "../data/mockData";
import StartedBtn from "./StartedBtn";
import logo from "../assets/logo.svg";

export default function SideBar() {

    return (
        <header className='w-full bg-cyan-950 px-5 pt-8 pb-5 text-white sm:px-10 sm:pt-16 xl:pb-0 xl:max-w-140 static xl:fixed xl:top-0 xl:left-0 xl:bottom-0'>
            <nav className='mb-11 flex justify-between items-start gap-x-12'>
                <a className='inline-flex items-start gap-5' href='#'>
                    <img className='w-5' src={logo} alt="Logo" />
                    <p className='font-semibold'>Velox</p>
                </a>
                <StartedBtn text="Get started" className='bg-sky-300 hover:bg-sky-600' />
            </nav>
            <div className='mb-11'>
                <h1 className='mb-6 text-3xl sm:text-5xl font-bold leading-tight'>
                    Money Transfers <br /> Made <span className='text-sky-300'>Simple</span>
                </h1>
                <p className='text-slate-300'>
                    No personal credit checks or founder guarantee.
                </p>
            </div>
            <div>
                <p className='mb-4 text-sky-300 text-xs uppercase tracking-wider'>Our offerings</p>
                <ul className='mb-12 flex justify-between gap-[1vw] sm:gap-5 md:gap-10 xl:justify-start xl:gap-x-3'>
                    {offerings.map((offering) => (
                        <li className='w-full' key={offering.id}>
                            <a className='w-full py-3 px-2 inline-flex flex-col justify-center items-center gap-y-3 rounded-sm bg-sky-600 hover:bg-sky-300 transition-all sm:py-6 sm:px-5' href={offering.href}>
                                <img className='w-8 h-8' src={offering.icon} alt={offering.name} />
                                <p className='max-w-24 text-black text-center text-xs font-medium leading-tight sm:text-sm'>
                                    {offering.name}
                                </p>
                            </a>
                        </li>))}
                </ul>
            </div>
            <ul className='flex justify-start gap-4'>
                {info.map((el) => (
                    <li key={el.id}>
                        <a className='text-sky-300 text-xs border-b border-transparent hover:border-sky-300 transition-all duration-300' href={el.href}>{el.name}</a>
                    </li>
                ))}
            </ul>
        </header>
    )
}