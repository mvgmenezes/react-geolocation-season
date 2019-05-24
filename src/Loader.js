import React from 'react'
import PropType from 'prop-types'

const Loader = ({message}) => {
    return (
        <div>
            <div class="ui active dimmer">
                <div class="ui text loader">{message}</div>
            </div>
            <p></p>
        </div>
    )
}

Loader.defaultProps = {
    message: 'Loading...'
}
export default Loader