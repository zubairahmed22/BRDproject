
import './App.css';
import Header from './Header';
import Herosection from './Herosection';
import Herosection2 from './Herosection2';
import Herosection_3 from './Herosection_3';
import Herosection_4 from './Herosection_4';
import Section_5 from './Section_5';
import Disclaimer from './Disclaimer';
import Footer from './Footer';
function App() {
  return (
    <div className="bg-smartstaking-400 w-full">
    
     <Header/>
     <div>
     <Herosection/>
     {/* <Herosection2/> */}
     <Herosection_3/>
     <Herosection_4/>
     <Section_5/>
     <Disclaimer/>
     <Footer/>

     </div>
     
    </div>
  );
}

export default App;
