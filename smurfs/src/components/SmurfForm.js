import React, { useState } from "react";

import { connect } from "react-redux"
import { addSmurf, getSmurf } from "../actions/index"

const SmurfForm = props => {
    const [smurfs, setSmurfs] = useState([{
        name: "",
        age: "",
        height: "",
        id: Date.now()
      }]);

    const handleChanges = e => {
        e.preventDefault();
        setSmurfs({...smurfs, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        props.addSmurf({...smurfs});
        setSmurfs({name: "", age: "", height: ""});
    }

    return (
        <div>
            <form>
                <h3>Add a Smurf! </h3>
                <input placeholder="Smurf Name" name="name" value={smurfs.name} onChange={handleChanges}/>
                <input placeholder="Smurf Age" name="age" value={smurfs.age} onChange={handleChanges}/>
                <input placeholder="Smurf Height" name="height" value={smurfs.height} onChange={handleChanges}/>
                <button onClick={submitForm}>Add</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return { state };
};
  
  export default connect(mapStateToProps, { addSmurf, getSmurf })(SmurfForm);