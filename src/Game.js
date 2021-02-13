import React from 'react'
import Words from './Words'
import Container from 'react-bootstrap/Container'

class Game extends React.Component{

    constructor(){
        super()
        this.state = {
            gameState : 0,
            points : 0,
            seconds : 60,
            currentWord : ""
        }
        this.answer = React.createRef(0)
        this.startGame = this.startGame.bind(this)
        this.stopWatch = this.stopWatch.bind(this)
        this.checkWord = this.checkWord.bind(this)
    }

    startGame = () => {
        var i = Math.floor(Math.random() * 3000)
        var word = Words[i]
        if(word === this.state.currentWord)
            word = Words[i+1]
        this.setState({
            gameState : 1,
            currentWord : word
        })
        if(this.state.seconds === 60)
            this.stopWatch()
    }

    stopWatch = () => {
        if(this.state.seconds !== 0){
            this.setState({
                seconds : this.state.seconds - 1
            })
        }else{
            this.setState({
                gameState : -1
            })
        }
        setTimeout(this.stopWatch, 1000)
    }

    checkWord = () => {
        this.word = this.answer.current.value
        if(this.state.currentWord ===  this.word){
            this.answer.current.value = ""
            this.startGame()
            this.setState({
                points : this.state.points + 1
            })
        }
    }
    
    render(){
        return(
            <React.Fragment>
                <Container>
                    {this.state.gameState === 0 ? 
                    <button onClick={this.startGame}>Start</button>
                    :
                        this.state.gameState === 1 ?
                        <div>
                            <span>Points: &emsp;{this.state.points}</span>&emsp;&emsp;&emsp;&emsp;<span>Time: &emsp;{this.state.seconds}</span><br/><br/>
                            <h1>{this.state.currentWord}</h1><br/>
                            <input id="answer" ref={this.answer} type="text" onKeyPress={this.checkWord} autofocus="true"/>
                        </div>
                        :
                    <div>
                        <p>Well Played! 🎉🎉</p><br></br>
                        <p>Your Score is : {this.state.points}</p>
                    </div>
                    
                }
                </Container>
            </React.Fragment>
        )
    }
}

export default Game