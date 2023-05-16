import { useContext ,useState } from 'react';
import './App.css';
import ShowHealthData from './Component/ShowHealthData/ShowHealthData';
import HealthDataContext, { HealthDataContextWrapper } from './context/health-data-context';
import EditHealthData from './Component/EditHealthData/EditHealthData';
import { EDIT, VIEW } from './store/store-types';
import MainComponent from './Component/Maincomponent/MainComponent';

function App() {
   

     return (
          <HealthDataContextWrapper>
               <MainComponent/>
          </HealthDataContextWrapper>
     );
}

  export default App;