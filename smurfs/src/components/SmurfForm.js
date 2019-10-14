import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: null,
        height: "",
        id: null
    });

    const handleChanges = property => e => {
        setSmurf(
            {
                ...smurf,
                [property]: e.target.value
            });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSmurf({
            ...smurf,
            age: Number(smurf.age),
            id: props.smurfs.length + 1
        });
        props.postSmurf(smurf);
        setSmurf({
            name: "",
            age: "",
            height: "",
            id: null
        });
    };

    return (
        <div className="smurf-form">
            <h3>Add a smurf of your own!</h3>
            <form onSubmit={handleSubmit} id="smurfForm">
                <div className="smurf-input">
                    <label htmlFor={smurf.name}>Name: </label>
                    <input value={smurf.name} onChange={handleChanges("name")} />
                </div>
                <div className="smurf-input">
                    <label htmlFor={smurf.age}>Age: </label>
                    <input value={smurf.age} onChange={handleChanges("age")} />
                </div>
                <div className="smurf-input">
                    <label htmlFor={smurf.height}>Height: </label>
                    <input value={smurf.height} onChange={handleChanges("height")} />
                </div>
                <button type="submit">Post Smurf!</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(
    mapStateToProps,
    { postSmurf }
)(SmurfForm);