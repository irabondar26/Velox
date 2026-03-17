import { companies } from "../data/mockData";

export default function TrustBar() {


    return (
        <section className='pb-25 sm:pb-33'>
            <h3 className='mb-21 text-center text-3xl font-base'>We escalate transfer efficiency <br />and productivity</h3>
            <ul className='grid grid-cols-6 gap-y-10 gap-x-6 justify-items-center sm:flex sm:justify-center sm:gap-x-12 items-center'>
                {companies.map((company, index) => (
                    <li
                        key={company.id}
                        className={`transition-transform duration-400 ease-in-out hover:scale-130 cursor-pointer ${index < 2 ? 'col-span-3' : 'col-span-2'}`}>
                        <img src={company.src} alt={company.name} className="max-h-8 w-auto" />
                    </li>
                ))}
            </ul>
        </section>
    )
}