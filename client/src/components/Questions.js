const Questions = () => {

    const QuestionsArray=[
        {
            number: 1,
            question: "What is this City?",
            options:['answer', 'wrongAnswer1', 'wrngAnswer2'],
            coordinates: [51.025, -114.1]
            
        },
        {
            number: 2   ,
            question: "What is the biggest mall in the city?",
            options:['answer', 'wrongAnswer1', 'wrngAnswer2'],
            coordinates: [-113.623055, 53.522778]
            
        }
    ]


    const randomNumber = Math.floor(Math.random() * Questions.length)

    return (
        <div>
            <h1>{QuestionsArray[randomNumber].question}</h1>
            <ul>
                {
                    QuestionsArray[0].options.map((option, index)=>{
                        const checkAnswer = () => {
                            // alert(QuestionsArray[randomNumber].options[index])
                            let chosenAnswer = QuestionsArray[randomNumber].options[index]
                            if (chosenAnswer === QuestionsArray[randomNumber].options[0]) {
                                alert("Correct answer! (" + chosenAnswer + ")")
                            }
                            else if (chosenAnswer === QuestionsArray[randomNumber].options[1]) {
                                alert("Incorrect answer! (" + chosenAnswer + ")")
                            }
                            if (chosenAnswer === QuestionsArray[randomNumber].options[2]) {
                                alert("Incorrect answer! (" + chosenAnswer + ")")
                            }
                          }
                       return <li key={index}><button onClick={checkAnswer}>{option}</button></li>
                    })
                }
            </ul>
        </div>
    );
}
 
export default Questions;