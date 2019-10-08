import React from 'react';

const Form =(props)=>{
    return(
        <form onSubmit={props.submit}>
            <input type="text" value={props.value} onChange={props.unlock} placeholder="wpisz cośtam"></input>

            
            <button>Submit</button>
        </form>
    )
}

export default Form