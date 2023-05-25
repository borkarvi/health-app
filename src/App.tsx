import './App.css';
import  { HealthDataContextWrapper } from './context/health-data-context';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootComp from './RootComp/RootComp';
import HomePage from './Component/HomePage/HomePage';
import EditHealthData from './Component/EditHealthData/EditHealthData';
import ViewHealthData from './Component/ViewHealthData/ViewHealthData';
import ShowHealthData from './Component/ShowHealthData/ShowHealthData';
import empLog from './empLog/EmpLog';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComp />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/show',
        element: <ShowHealthData />
      },
      {
        path: '/edit/:userId',
        element: <EditHealthData />
      },
      {
        path: '/view/:userId',
        element: <ViewHealthData />
      },
      {
      path: '/Logs',
      element: 'Logs HealthData'
    }
    ]
  }
  
]);


function App() {


  return (
    <HealthDataContextWrapper>
    
       <RouterProvider router={router} />

    </HealthDataContextWrapper>

  );
}

export default App;
