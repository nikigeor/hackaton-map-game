const Questions = () => {

    const Questions=[
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

    return (
        <div>
            <h1>{Questions[0].question}</h1>
            <ul>
                {
                    Questions[0].options.map((option, index)=>{
                       return <li key={index}>{option}</li>
                    })
                }
            </ul>
        </div>
    );
}
 
export default Questions;