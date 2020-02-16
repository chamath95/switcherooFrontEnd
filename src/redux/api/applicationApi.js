import * as actions from "../actions/financial_health/financial_Action";
import {baseurl} from "./index"

const token = localStorage.getItem("tokenas");


const applicationDataPost = (data, callback) => dispatch => {
    dispatch(actions.LoadingFinancialData(true));
    console.log("data json", data);
    const options = {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      })
    };
    fetch(baseurl + "/detailsYouNeed/saveDetails", options)
      .then(res => {
        dispatch(actions.LoadingFinancialData(false));
        if (res.status === 201)
          res.json().then(res => {
            console.log(res.data.applicants);
            dispatch(actions.setFinancialData({ ...res.data.applicants }));
            callback();
          });
      })
      .catch(err => {
        console.log(err);
        dispatch(actions.LoadingFinancialData(false));
        alert("Some thing going wrong! man");
      });
  };
  
  const AppApi = {
    applicationDataPost
  };

  export default AppApi;