import React from 'react'

const Error = ({message, directives}) => {
    return (
        
        <div class="ui negative message">
            <i class="close icon"></i>
            <div class="header">
                {message}
            </div>
            <p>{directives}</p>
        </div>
    )
}

export default Error