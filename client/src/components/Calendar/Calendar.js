import React, { useEffect, useState}  from "react";
import CalendarCard from "../CalendarCard/CalendarCard"
import API from "../../utils/API";
import CalendarManagePrompt from "./CalendarManagePrompt"

function Calendar()  {
    const [plan, setPlan] = useState({})
    useEffect(()=>{
        // const userId = "60bee00177427c19cc9e1e2f";
        const userId = " ";
        API.getCalendar(userId)
        .then((res) => { console.log("res", res); console.log("res.data", res.data); 
        setPlan(res.data)
     })
        .catch(err => console.log(err));
    }, [])
   
    return (
        <div className="wrapper px-4">
            <div className="row justity-content-end">
                <div className="col-md-12 display-2 text-center">
                    My Meal Plan
                </div>
            {
                plan.length > 0 ? (
                <div className="card-group">
                    <CalendarCard key={plan[0].sunday.day} day={plan[0].sunday.day} ingredients={plan[0].sunday.ingredients} label={plan[0].sunday.label} url={plan[0].sunday.url} image={plan[0].sunday.image} userId={plan[0].userId}/>
                    <CalendarCard key={plan[0].monday.day} day={plan[0].monday.day} ingredients={plan[0].monday.ingredients} label={plan[0].monday.label} url={plan[0].monday.url} image={plan[0].monday.image} userId={plan[0].userId}   />
                    <CalendarCard key={plan[0].tuesday.day} day={plan[0].tuesday.day}ingredients={plan[0].tuesday.ingredients} label={plan[0].tuesday.label} url={plan[0].tuesday.url} image={plan[0].tuesday.image} userId={plan[0].userId}   />
                    <CalendarCard key={plan[0].wednesday.day}day={plan[0].wednesday.day} ingredients={plan[0].wednesday.ingredients} label={plan[0].wednesday.label} url={plan[0].wednesday.url} image={plan[0].wednesday.image} userId={plan[0].userId}   />
                    <CalendarCard key={plan[0].thursday.day} day={plan[0].thursday.day}ingredients={plan[0].thursday.ingredients} label={plan[0].thursday.label} url={plan[0].thursday.url} image={plan[0].thursday.image} userId={plan[0].userId}   />
                    <CalendarCard key={plan[0].friday.day} day={plan[0].friday.day} ingredients={plan[0].friday.ingredients} label={plan[0].friday.label} url={plan[0].friday.url} image={plan[0].friday.image} userId={plan[0].userId}  />
                    <CalendarCard key={plan[0].saturday.day} day={plan[0].saturday.day} ingredients={plan[0].saturday.ingredients} label={plan[0].saturday.label} url={plan[0].saturday.url} image={plan[0].saturday.image} userId={plan[0].userId} id={plan.id} />
                </div>
            ) : <div className="align-content-center">
                    <CalendarManagePrompt/>
                </div>
            }
            </div>
        </div>
    )  
}








export default Calendar;