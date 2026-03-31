import mainPhoto from "../assets/mainPhoto.jpg";
import coffeeCup from "../assets/coffeeCup.svg";
import creditcard from "../assets/creditcard.svg";
import sentIcon from "../assets/sent.svg";

export default function Hero() {
    return (
        <section className="relative mb-10">
            <img className="rounded-3xl" src={mainPhoto} alt="Photo of a happy man" />
            <div className="hidden absolute top-[25%] right-[55%] py-1 pl-1 pr-2 rounded-full justify-center items-center gap-x-1  bg-cyan-950 opacity-80 sm:inline-flex md:py-2 md:pl-2 md:pr-5 md:gap-x-2.5 ">
                <div className="bg-sky-300 rounded-full p-1 inline-block md:p-2">
                    <img className="w-4 h-4" src={coffeeCup} alt="coffeeCup" />
                </div>
                <p className="text-xs md:text-base text-white">Interest earned!</p>
            </div>
            <div className="hidden absolute top-[70%] right-[67%] py-1 pl-1 pr-2 rounded-full justify-center items-center gap-x-1  bg-cyan-950 opacity-80 sm:inline-flex md:py-2 md:pl-2 md:pr-5 md:gap-x-2.5">
                <div className="bg-sky-300 rounded-full p-1 inline-block md:p-2">
                    <img className="w-4 h-4" src={creditcard} alt="creditcard" />
                </div>
                <p className="text-xs md:text-base text-white">Payment recieved!</p>
            </div>
            <div className="hidden absolute top-[35%] right-[7%] py-1 pl-1 pr-2 rounded-full justify-center items-center gap-x-1  bg-cyan-950 opacity-80 sm:inline-flex md:py-2 md:pl-2 md:pr-5 md:gap-x-2.5">
                <div className="bg-sky-300 rounded-full pt-1 pr-1 pl-0.5 pb-0.5 inline-block md:p-2">
                    <img className="w-4 h-4" src={sentIcon} alt="sentIcon" />
                </div>
                <p className="text-xs md:text-base text-white">Money sent!</p>
            </div>
        </section>
    )
}