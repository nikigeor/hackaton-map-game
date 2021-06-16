import placeData from '../data/places.json'

const Questions = ({index}) => {

    // const index = Math.floor(Math.random() * parkData.length)

    return (
        <div className="questions">
            <p className="question">
                {placeData.cities[index].question}
            </p>
            <ul>
                {
                    placeData.cities[0].options.map((option, index)=>{
                        const checkAnswer = () => {
                            let chosenAnswer = placeData.cities[index].options[index]
                            if (chosenAnswer === placeData.cities[index].options[0]) {
                                if (window.confirm("Correct answer! :)  Please continue.")) {
                                    window.location.href=`/map${index +1}`
                                }
                            }
                            else if (chosenAnswer === placeData.cities[index].options[1]) {
                                if (window.confirm("Incorrect answer! :(  Click to proceed.")) {
                                    window.location.href='/game1'
                                }
                            }
                            if (chosenAnswer === placeData.cities[index].options[2]) {
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