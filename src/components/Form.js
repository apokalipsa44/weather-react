import React from 'react';

const Form =props=>{
    return(
        <form>
            <input type="text" value={props.value} onChange={props.unlock}></input>
            <button>Submit</button>
        </form>
    )
}

export default Form