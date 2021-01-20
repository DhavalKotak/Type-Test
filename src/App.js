import React from 'react'
import Head from './Head'
import Game from './Game'

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Head />
        <Game />
      </React.Fragment>
    )
  }
}

export default App