import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './Loginpage';
import Dashboard from './Dashboard';
import Stock from './Stock.js'
/*import Maintenance from '../Maintenance.js'*/
import Information  from './Information.js'
import Report from './Report.js'
import News from './News.js'
import WaterService from './WaterService.js'
import PowerElectrical from './PowerElectrical.js'
import Acmaintenance from './Acmaintenance.js'
import CleaningService from './CleaningService.js'
import Transport from './Transport.js'
import Profile from './Profile.js'
import Cs from './Cs.js'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/stock' element={<Stock/>}></Route>
        {/*<Route path='/maintenance' element={<Maintenance/>}></Route>*/}
        <Route path='/information' element={<Information/>}></Route>
        <Route path='/report' element={<Report/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/waterService' element={<WaterService/>}></Route>
        <Route path='/powerElectrical' element={<PowerElectrical/>}></Route>
        <Route path='/acmaintenance' element={<Acmaintenance/>}></Route>
        <Route path='/cleaningService' element={<CleaningService/>}></Route>
        <Route path='/transport' element={<Transport/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/cs' element={<Cs/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
