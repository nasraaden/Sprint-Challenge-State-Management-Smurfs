import React, { useEffect } from "react"
import axios from "axios"
import { connect } from 'react-redux';
import { getSmurf } from "../actions/index"

import SmurfCard from "./SmurfCard"


const Smurfs = props => {


    useEffect(() => {
        axios.get("http://localhost:3333/smurfs")
        .then(response => {
            console.log(response)
            props.setSmurfs(response.data)
        })
    }, [])

    console.log(props.smurfs)

    const handleChanges = (e) => {
        e.preventDefault();
        props.setSmurfs(e.target.value);
    }

    return (
        <div>
                {props.smurfs.map(smurf => (
                    <SmurfCard key={smurf.id} smurf={smurf} />
                ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      state
    };
  };

  export default connect(
    mapStateToProps,
    { getSmurf }
)(Smurfs)