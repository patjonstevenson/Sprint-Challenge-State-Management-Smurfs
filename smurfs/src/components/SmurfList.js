import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { fetchSmurfs } from "../actions";

const SmurfList = props => {
    console.log("Smurfs in SmurfList:\n", props.smurfs);

    useEffect(() => {
        props.fetchSmurfs();
    }, []);



    if (props.isFetching) {
        return <h3>Fetching smurfs...</h3>
    }

    if (!props.smurfs.length) {
        return <h3>No smurfs yet!</h3>
    }
    return (
        <div className="smurf-list">
            {props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
        </div>
    );
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList);