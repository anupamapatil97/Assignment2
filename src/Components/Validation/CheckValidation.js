import React from 'react'

export default function CheckValidation(props) {
    let Message="Text too short";
    if(props.lenghValue>5){
        Message="Text long enough";
    }
    return (
        <div>
            <h1>{Message}</h1>
        </div>
    )
}
