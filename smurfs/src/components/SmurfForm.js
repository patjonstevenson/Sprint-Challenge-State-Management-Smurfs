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
            age: null,
            height: "",
            id: null
        });
    };

    return (
        <div className="smurf-form">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input value={smurf.name} onChange={handleChanges("name")} />
                <input value={smurf.age} onChange={handleChanges("age")} />
                <input value={smurf.height} onChange={handleChanges("height")} />
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