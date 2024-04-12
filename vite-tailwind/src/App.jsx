import './App.css';
import Header from './components/Header/Header';
import {OverviewContainer, OverviewTodayContainer} from './components/overviewContainer/OverviewContainer';
import Attribution from './components/Attribution';



function App() {

  return (
    <div>
     <Header/>
     <div className='absolute top-[191px]'>
     <OverviewContainer/>
     <OverviewTodayContainer/>
     <div className='bg-[#50C4ED] w-[90%] flex left-0 right-0 mx-auto justify-center mt-10 rounded-full'><Attribution /></div>
     
     </div>
    
    </div>
  )
}

export default App
