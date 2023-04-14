import axios from "axios";
import { useEffect } from "react";
function Section({val, place, setPlace, url, setUrl, fetchDataAll}){

   

    
    
    return(
        <div className="main">
            <div className="image">
            <img src="https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg" alt=""/>
            <div className="content">
                <h3>Temperature in Celicius: {val?.current?.temp_c} deg C</h3>
                <h4>Place: {val?.location?.name}</h4>
                <h4>Condition: {val?.current?.condition?.text}</h4>
            </div>
            </div>
            <div className="section">
                <span>
                    <input type="text" value={place} onChange={(e)=>setPlace(e.target.value)}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="Search" onClick={fetchDataAll} />
                </span>
                <h3>Weather Details</h3>
                <h4>Country: {val?.location?.country}</h4>
                <h4>Region: {val?.location?.region}</h4>
                <h4>Local Time: {val?.location?.localtime}</h4>
                <h4>Temperature in Farenheit: {val?.current?.temp_f} F</h4>


            </div>
        </div>
    )
}

export default Section;