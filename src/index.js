import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';

class App extends Component{

    state = {
        latitude: null,
        erroMessage: ''
    }
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords.latitude)
                this.setState({latitude: position.coords.latitude})
            }, 
            (err) => {
                console.log(err)
                this.setState({erroMessage: err.message})
            }
        )
    }

    render(){

        if (this.state.erroMessage && !this.state.latitude){
            return <div>Error: {this.state.erroMessage}</div>        
        }

        if (!this.state.erroMessage && this.state.latitude){
            return <SeasonDisplay latitude={this.state.latitude} />        
        }

        return (
            <div>Loading...</div>
        )
    }
    
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)