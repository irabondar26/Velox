import SideBar from './Components/SideBar';
import Hero from './Components/Hero';
import TrustBar from './Components/TrustBar';
import Producticity from './Components/Producticity';
import Expense from './Components/Expense';
import Technology from './Components/Technology';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';
import './App.css'


function App() {

  return (
    <div className='flex flex-col xl:flex-row'>
      <SideBar />
      <main className='w-full xl:pl-140'>
        <section className="px-10 pt-12">
          <Hero />
          <TrustBar />
          <Producticity />
          <Expense/>
          <Technology/>
          <CallToAction/>
        </section>
        <Footer />
      </main>
    </div>
  );
}
export default App;
