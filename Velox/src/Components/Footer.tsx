import blueLogo from "../assets/blueLogo.svg";

export default function Footer() {
    return (
        <footer id="social-links" className='px-7 py-5 h-74 bg-gray-200 flex justify-between items-center gap-25 sm:px-10 sm:py-8 sm:gap-0'>
            <div className='h-full flex flex-col justify-between items-start'>
                <img className='w-13 h-13' src={blueLogo} alt="logo" />
                <h2 className='inline text-cyan-900 text-3xl font-semibold sm:text-5xl'>Velox</h2>
            </div>
            <div className='h-full flex flex-col justify-between items-start text-xs sm:text-base'>
                <div className="text-black flex flex-col justify-start items-start">
                    <h5 className="text-neutral-600">Contacts</h5>
                    <a href="#">Instagram</a>
                    <a href="#">X</a>
                    <a href="#">LinkedIn</a>
                </div>
                <div id='legal' className="text-neutral-600">
                    <p>
                        Design: <a href="https://www.figma.com/community" target="_blank" className='underline'>Figma Community</a>
                        <span className='mx-2'>|</span>
                        Code: <span>Iryna</span>
                    </p>
                    <p>© 2026 Velox. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}