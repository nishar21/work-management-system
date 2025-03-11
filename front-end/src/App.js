import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardA from './Dashboard-admin.js';
import DashboardS from './Dashboard-Super.js';
import DashboardM from './Dashboard-management.js';
import Stock from './Stock.js'
import Maintenance from './Maintenance.js'
import Information  from './Information.js'
import Report from './Report.js'
import News from './News.js'
import WaterService from './WaterService.js'
import PowerElectrical from './PowerElectrical.js'
import Acmaintenance from './Acmaintenance.js'
import CleaningService from './CleaningService.js'
import Transport from './Transport.js'
import Profile from './Profile.js'
import Cs from './Departments/Cs.js';
import Mech from './Departments/Mech.js';
import Civil from './Departments/Civil.js'
import Arts from './Departments/Arts.js';
import Loginpage from './Loginpage.js';
import Main_admin from './Main-admin.js';
import EndUser from './EndUser.js'
import { Provider } from "react-redux";
import store from './Redux/Store.js'
import Container from './Redux/Container.js';
import Ticket from './Ticket.js';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Loginpage/>}></Route>
            <Route path='/main-admin' element={<Main_admin/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/dashboard-admin' element={<DashboardA/>}></Route>
            <Route path='/dashboard-super' element={<DashboardS/>}></Route>
            <Route path='/dashboard-management' element={<DashboardM/>}></Route>
            <Route path='/enduser' element={<EndUser/>}></Route>
            <Route path='/stock' element={<Stock/>}></Route>
            <Route path='/maintenance' element={<Maintenance/>}></Route>
            <Route path='/information' element={<Information/>}></Route>
            <Route path='/report' element={<Report/>}></Route>
            <Route path='/news' element={<News/>}></Route>
            <Route path='/waterService' element={<WaterService/>}></Route>
            <Route path='/powerElectrical' element={<PowerElectrical/>}></Route>
            <Route path='/ac' element={<Acmaintenance/>}></Route>
            <Route path='/cleaningService' element={<CleaningService/>}></Route>
            <Route path='/transport' element={<Transport/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/cs' element={<Cs/>}></Route>
            <Route path='/mech' element={<Mech/>}></Route>
            <Route path='/civil' element={<Civil/>}></Route>
            <Route path='/arts' element={<Arts/>}></Route>
            <Route path='/container' element={<Container/>}></Route>
            <Route path='/ticket' element={<Ticket/>}></Route>

            
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
