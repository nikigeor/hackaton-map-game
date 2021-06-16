import './style.css'
let newCoordinates

const Questions = ({city, nextCity, setLocation}) => {

    return (
        <div className="questions">
            <p className="question">
                {city.question}
            </p>
            <ul>
                {
                    city.options.map((option, index)=>{
                        const checkAnswer = () => {
                            let chosenAnswer = city.options[index]
                            if (chosenAnswer === city.options[0]) {
                                alert("Correct answer! :)")
                                if (nextCity) setLocation({lat: nextCity.coordinates[1], lng: nextCity.coordinates[0]})
                                else window.location.href='/ending'
                                console.log('newCoordinates', newCoordinates)
                            }
                            else if (chosenAnswer === city.options[1]) {
                                if (window.confirm("Incorrect answer! :(  Click to proceed.")) {
                                    window.location.href='/game1'
                                }
                            }
                            if (chosenAnswer === city.options[2]) {
                                if (window.confirm("Incorrect answer! :(  Click to proceed.")) {
                                    window.location.href='/game2'
                                }
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
export { newCoordinates }