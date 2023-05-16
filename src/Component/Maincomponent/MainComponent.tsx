import { useContext } from "react";
import HealthDataContext from "../../context/health-data-context";
import ShowHealthData from "../ShowHealthData/ShowHealthData";
import EditHealthData from "../EditHealthData/EditHealthData";
import { VIEW, EDIT, TABLE } from "../../store/store-types";
import ViewHealthData from "../ViewHealthData/ViewHealthData";

const MainComponent = () => {
    const healthContext = useContext(HealthDataContext);
    
    const {currentPageState} = healthContext;
    // console.log('Main currentPageState' , currentPageState)
    setTimeout(() => {

    }, 1000);

    return(
        <div>
            {currentPageState === VIEW && <ViewHealthData/>}
            {currentPageState === TABLE &&  <ShowHealthData />}
           {currentPageState === EDIT && <EditHealthData/> }

        </div>
    )
};
export default MainComponent;