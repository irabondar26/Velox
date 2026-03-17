import logo from "../assets/logo.svg";
import coffeeCup from "../assets/coffeeCup.svg";
import creditcard from "../assets/creditcard.svg";
import sentIcon from "../assets/sent.svg";

const OrbitIllustration = () => {
    const icons = [
        { src: coffeeCup, angle: 0 },
        { src: creditcard, angle: 120 },
        { src: sentIcon, angle: 240 }
    ];

    return (
        <div className='relative w-40 h-40 flex items-center justify-center'>

            {/* Center */}
            <div className='relative w-16 h-16 bg-cyan-950 rounded-full flex items-center justify-center z-40 shadow-lg'>
                <img className='w-8 h-8' src={logo} alt="logo" />
            </div>

            {/* Orbit */}
            <div className='animate-orbit-active absolute w-40 h-40 border border-dashed border-cyan-950 rounded-full transition-all'>
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className='absolute top-1/2 left-1/2 w-10 h-10'
                        style={{
                            transform: `translate(-50%, -50%) rotate(${icon.angle}deg) translate(78px) rotate(-${icon.angle}deg)`
                        }}>
                        <div className='animate-icon-active w-full h-full bg-white rounded-full flex items-center justify-center border border-slate-100 shadow-ml'>
                            <img src={icon.src} className='w-5 h-5' alt="icon" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrbitIllustration;