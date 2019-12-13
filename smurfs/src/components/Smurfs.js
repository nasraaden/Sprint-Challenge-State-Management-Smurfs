import React, { useEffect } from "react"
import { connect } from 'react-redux';
import { getSmurf } from "../actions/index";

import SmurfCard from "./SmurfCard"

const Smurfs = props => {
    console.log(props)

    useEffect(() => {
        props.getSmurf();
    }, [])

    return (
        <div>
            {props.state.smurfs.map(smurf => (
                <SmurfCard key={smurf.id} smurf={smurf} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return { state };
};

export default connect(
    mapStateToProps,
    { getSmurf }
  )( Smurfs);
