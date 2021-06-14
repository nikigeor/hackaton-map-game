import parkData from '../data/skateboard-parks.json'

const Questions = () => {

    // const index = Math.floor(Math.random() * parkData.length)

    return (
        <div>
            <p>
                {parkData.cities[0].question}
            </p>
            <ul>
                {
                    parkData.cities[0].options.map((option, index)=>{
                        const checkAnswer = () => {
                            let chosenAnswer = parkData.cities[index].options[index]
                            if (chosenAnswer === parkData.cities[index].options[0]) {
                                alert("Correct answer! (" + chosenAnswer + ")")
                            }
                            else if (chosenAnswer === parkData.cities[index].options[1]) {
                                alert("Incorrect answer! (" + chosenAnswer + ")")
                            }
                            if (chosenAnswer === parkData.cities[index].options[2]) {
                                alert("Incorrect answer! (" + chosenAnswer + ")")
                            }
                        }
                        return <li key={index}><button onClick={checkAnswer}>{option}</button></li>
                    })
                }
            </ul>
        </div>
    )
}
 
export default Questions;