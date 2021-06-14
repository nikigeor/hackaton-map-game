const express = require('express');
const router = express.Router();
const question = require('../models/questions');



router.get("/add-questions", (req, res) => {
    const quest = new questions({
      question: "How are you?",
    });
  
    quest
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

//create a question
// router.post('/', async (req, res) =>{
//     try{
//         let newQuestion = new question(req.body);
//         await newQuestion.save();
//         console.log("Created a new question:", newQuestion);
//         res.send(newQuestion);
//     } catch(error){
//         console.log(error);
//         res.sendStatus(500);
        
//     }
// })
  
//get all questions
  router.get('/', async (req, res) => {
    let data = await question.find({})
    console.info('Records retrieved from mongoose:', data?.length);
    res.send(data);
  });
  
  //get single questions
  router.get('/:id', async (req, res) => {
    try{
        let data = await question.findOne({_id: req.params.id})
        console.info('Found the question:', data);
        res.send(data);
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
  });
  
  module.exports = router;