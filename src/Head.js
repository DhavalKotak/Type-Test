import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Head extends React.Component{
    render(){
        return(
            <Jumbotron fluid>
                <h1>Type Test⌨️</h1>
                <p>Welcome to Type-Test. Try to type as many words as you can<br/> in 1 minute to test your typing speed.</p>
            </Jumbotron>
        )
    }
}

export default Head