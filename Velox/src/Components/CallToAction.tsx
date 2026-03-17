import StartedBtn from "./StartedBtn";
import smilingWoman from "../assets/smilingWoman.jpg";

export default function CallToAction() {
    return (
        <section className='relative mb-25 h-87 rounded-xl overflow-hidden group'>
            <img className='w-full h-full object-cover' src={smilingWoman} alt="smilingWoman" />
            <div className='absolute inset-0 bg-cyan-950/30'></div>
            <div className='max-w-77 absolute bottom-8 left-5 right-5 z-10 sm:left-10'>
                <h3 className='mb-4 text-white text-xl font-semibold max-w-[75%] leading-tight drop-shadow-md md:text-3xl md:max-w-full'>
                    Download Etran and manage everything from your phone.
                </h3>
                <StartedBtn text="Get started" className='bg-sky-300 hover:bg-sky-400 border-none shadow-lg' />
            </div>
        </section>
    )
}