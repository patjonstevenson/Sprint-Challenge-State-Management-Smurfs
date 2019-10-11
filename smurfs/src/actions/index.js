import axios from "axios";

export const FETCH_SMURF = "FETCH_SMURF";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const POST_SMURF = "POST_SMURF";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const fetchSmurf = () => {
    dispatch({ type: "FETCH_SMURF" });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("Fetch success!\n", res);
            dispatch({ type: FETCH_SUCCESS, payload: res })
        })
        .catch(err => {
            console.log("Oops! Something went wrong fetching data:\n", err);
            dispatch({ type: FETCH_FAILURE, payload: err });
        });
}

export const postSmurf = smurf => {
    dispatch({ type: "post_SMURF" });
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log("Post success!\n", res);
            dispatch({ type: FETCH_SUCCESS, payload: res })
        })
        .catch(err => {
            console.log("Oops! Something went wrong posting data:\n", err);
            dispatch({ type: FETCH_FAILURE, payload: err });
        });
}