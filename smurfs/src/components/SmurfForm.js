import React , { useState } from "react";
import axios from "axios"

const SmurfForm = props => {

    const [smurfs, setSmurfs] = useState([{
        name: "",
        age: "",
        height: "",
      }]);

    const handleChanges = e => {
        e.preventDefault();
        props.setSmurfs(e.target.value)
    }

    return (
        <div>
            <form>
                <h3>Add a Smurf! </h3>
                <input placeholder="Smurf Name" name="name" value={smurfs.name} />
                <input placeholder="Smurf Age" name="age" value={smurfs.age}/>
                <input placeholder="Smurf Height" name="height" value={smurfs.height}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default SmurfForm;