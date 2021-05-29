
import axios from "axios";

const BASEURL = "https://api.edamam.com/search?q="

const APIKEY = "&app_id=40e21d0a&app_key=d32282d44a926244791002337e579dc9&count=10"

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
// from external api
    searchRecipes: function(query){
    return axios.get(BASEURL + query + APIKEY)

  },
//   get saved recipes from database
getRecipesByUser: function(id) {
    return axios.get("/api/recipes/" + id);
  },
// q = query
  getRecipesByQuery: function(id, q) {
    return axios.get("/api/recipes/" + id,{q});
  },
 getCalendar: function(id){
        return axios.get("/api/calendar/" + id) 
},
 deleteCalendar: function(id) {
    return axios.delete("/api/calendar/" + id);
  },
  updateCalendar: function(id){
      return axios.post("/api/calendar" + id)
  }

}

