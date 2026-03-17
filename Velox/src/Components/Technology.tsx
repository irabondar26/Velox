import { cards } from "../data/mockData"

export default function Technology() {

    return (
        <section id="technology" className='py-25 sm:py-35'>
            <h2 className='mb-4 text-cyan-950 text-5xl text-center'>First class software</h2>
            <p className='mb-8 text-neutral-600 text-center'>Get real-time insights, seamless transactions, and advanced <br />tools to manage your wealth effortlessly</p>
            <ul className='flex flex-col justify-center items-center gap-5 md:flex-row md:gap-10'>
                {cards.map(card => (
                    <li className='min-w-[20%] text-center group cursor-pointer' key={card.id}>
                        <div className='p-9 bg-cyan-950 hover:bg-cyan-900 rounded-xl flex justify-center items-center mb-3.5 
                      transition-all duration-500 ease-in-out 
                      group-hover:-translate-y-3 group-hover:shadow-2xl'>
                            <img className='w-16 h-16' src={card.img} alt={card.name} />
                        </div>
                        <h5 className='text-cyan-950 font-medium transition-colors duration-300 group-hover:text-sky-400'>
                            {card.name}
                        </h5>
                    </li>
                ))}
            </ul>
        </section>
    )
}