import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import Error from './Error';

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
            return <Error message={this.state.erroMessage} directives="Is necessary able the geolocation in your browser."/>     
        }

        if (!this.state.erroMessage && this.state.latitude){
            return <SeasonDisplay latitude={this.state.latitude} />        
        }

        return (
            <Loader message="Please, accept location request."/>
        )
    }
    
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)