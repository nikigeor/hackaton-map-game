import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import './Game2.css'

const GameTwo = () => {
    const playerScore= useRef(0)
    const computerScore= useRef(0)
    //const [playerScore, setPlayerScore]= useState(0)
    //const [computerScore, setComputerScore]=useState(0)
    const [playerChoice, setPlayerChoice] = useState('')
    const [computerChoice, setComputerChoice] = useState('')
    const [result, setResult]= useState()
    const [chances, setChances]= useState(3)
    //const [winner, setWinner]=useState()
    
    let choices = ['Rock', 'Paper', 'Scissors']

    const handleClick = (value)=>{   
        setPlayerChoice(value)
        compChoice()

        let chance= chances -1
        setChances(chance)

        if(chance === 0){
            if(playerScore.current > computerScore.current){
                setResult("YOU WON!")
              
            }else if(playerScore.current < computerScore.current){
               setResult('YOU LOST AGAIN!')
               
            }else if(playerScore.current === computerScore.current){
               setResult('ITS A TIE!')
              
            }
        }  
    }


    const compChoice = ()=>{
        let randChoice = choices[Math.floor(Math.random()* choices.length)]
        setComputerChoice(randChoice)
    }

    
    useEffect(()=>{
        // let pCount = 0 
        // let cCount = 0
            switch (playerChoice + computerChoice) {
                case 'ScissorsPaper':
                case 'RockScissors':
                case 'PaperRock':   
                    playerScore.current = playerScore.current + 1
                    //setWinner('player')
                    break
                case 'PaperScissors':
                case 'ScissorsRock':
                case 'RockPaper':  
                    computerScore.current = computerScore.current+1
                    //setWinner('computer')
                    break
                // case 'RockRock':
                // case 'PaperPaper':
                // case 'ScissorsScissors':     
                //   break
                 default:
            } 
   }, [computerChoice, playerChoice])
    

    return (
        <div className="game-container">
            <h1>Rock Paper Scissors</h1>
            <p className="chances-tag">You have <span className='chances'>{chances} </span>chances!!</p>
            <div className="score">
                <p>Player: <span className='score-num'>{playerScore.current}</span></p>
                <p>Computer: <span className='score-num'>{computerScore.current}</span></p>

                {/* <p>Player: {playerScore}</p>
                <p>Computer: {computerScore}</p> */}
            </div>
            {
                chances===0? (<div className="done">
                                    <p>{result}</p>
                                    <Link style={{marginTop: "100px"}} className="linky-button" to='/map2'>Next Question</Link> 
                                    <Link style={{marginTop: "100px"}} className="linky-button" to='/welcome'>Quit</Link>
                                </div>
                            ):(
                                <div className="select">
                                    <h2>Make your Selection</h2>
                                    {
                                        choices.map((choice, index) => <button key={index} 
                                        onClick={()=>handleClick(choice)}>{choice}</button>
                                        )
                                    }
                                    <div className="choices">
                                        <div>  
                                            <h4>You Picked:<span className="choice">{playerChoice}</span></h4>
                                        </div>
                                        <div>
                                            <h4>Computer Picked:<span className="choice">{computerChoice}</span></h4>
                                        </div>
                                    </div>
                                </div>
                            )
            }
        </div>
    );
}
 
export default GameTwo;