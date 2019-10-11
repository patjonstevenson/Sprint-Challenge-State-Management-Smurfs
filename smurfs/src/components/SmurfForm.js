import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({ name: "", age: null, height: "", id: null });
    return (
        <div className="smurf-form">
            <form>
                <input />
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