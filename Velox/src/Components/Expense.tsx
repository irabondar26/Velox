import { articles } from "../data/mockData";
import smilingMan from "../assets/happyMan.jpg";

export default function Expense() {

    return (
        <section id="expense">
            <h2 className='mb-9 text-cyan-950 text-5xl text-center'>The Most Reliable App</h2>
            <ul className='flex flex-col justify-between items-center gap-5 mb-25 md:flex-row md:mb-30'>
                {articles.map(article => (
                    <li className='group cursor-pointer w-full md:w-[50%]' key={article.id}>
                        <div className='relative mb-6 overflow-hidden rounded-xl'>
                            <img
                                className='w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-105'
                                src={article.imgSrc}
                                alt={article.imgName}
                            />
                            <div className='absolute inset-0 p-6 pointer-events-none'>
                                {/* Top left */}
                                <div className='absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-lg 
                      opacity-0 group-hover:opacity-100 transition-all duration-500 
                      group-hover:translate-x-2 group-hover:translate-y-2'></div>

                                {/* Top right */}
                                <div className='absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-lg 
                      opacity-0 group-hover:opacity-100 transition-all duration-500 
                      group-hover:-translate-x-2 group-hover:translate-y-2'></div>

                                {/* Botoom left */}
                                <div className='absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-lg 
                      opacity-0 group-hover:opacity-100 transition-all duration-500 
                      group-hover:translate-x-2 group-hover:-translate-y-2'></div>

                                {/* Bottom right */}
                                <div className='absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-lg 
                      opacity-0 group-hover:opacity-100 transition-all duration-500 
                      group-hover:-translate-x-2 group-hover:-translate-y-2'></div>
                            </div>
                        </div>

                        <h4 className='text-cyan-950  font-semibold'>{article.title}</h4>
                        <p className='text-neutral-600 text-wrap'>{article.description}</p>
                    </li>
                ))}
            </ul>
            <img className='w-full h-87 object-cover rounded-xl' src={smilingMan} alt="smilingMan" />
        </section>
    )
}