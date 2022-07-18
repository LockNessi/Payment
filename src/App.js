import logo from './logo.svg';
import Illustration from './Images/illustration-hero.svg';
import './App.css';
import Change from './Change';
import Payment from './Payment';

function App() {
  return (
    <div className="App">


      <section>
        <img src={Illustration} alt="" 
        className='illustration'/>
        <div className='titlediv'>
            <h1 className='title'>Order Summary</h1>
            <p className='titleText'>You can listen to millons of songs,
            audiobook and podcast on any device  
            anywhere you like!.</p>
            
          </div>
         <Change/>
        <Payment/>
       <h4 className='lastText'>Cancel Order</h4>
        </section>
        
    </div>
  );
}

export default App;
