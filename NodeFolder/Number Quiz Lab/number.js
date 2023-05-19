const express = require('express');
const port =process.env.PORT || 3000;
const sessions = require('express-session');
const app= express();

const questions = [
    "1, 2, 3, 4, 5", // natural number
    "1, 1, 2, 3, 5", //fib
    "1, 4, 9, 16, 25", // squares
    "2, 3, 5, 7, 11", // primes
    "1, 2, 4, 8, 16", // powers of 2
]
const answers = [6,8,36,13,32]


app.use(sessions({
    secret: "thisismykey",
    resave:false,
    saveUninitialized: true
}));

app.use(express.urlencoded({extended : true}));

app.listen(port,()=>{console.log(`Running on port: ${port}`)});

app.set("view engine", "pug");

app.use(express.static('public'));


app.get('/', (req,res) => {
    let score = req.session.score || 0;
    let currentQuestion = req.session.currentQuestion || 0;
    req.session.score = score;
    req.session.currentQuestion = currentQuestion;
    res.render('theNumberQuiz',{
        question: questions[currentQuestion],
        score: score, 
        questionNumber: currentQuestion+1
    })

})

app.post('/',(req, res)=>{
    let answer = parseInt(req.body.answer);
    let currentQuestion = req.session.currentQuestion;
    let correctAnswer = answers[currentQuestion];
    if(answer == correctAnswer){
        req.session.score = (req.session.score || 0) +1;
    }
    req.session.currentQuestion = req.session.currentQuestion +1;
    if(req.session.currentQuestion == questions.length  ){
        res.redirect('/complete')
    }
    else{
        res.redirect('/')
    }
})

app.get('/complete', (req,res)=>{
   let finalScore = req.session.score;
   res.render('theNumberQuiz',{
      finalScore : finalScore,
      questionNumber: req.session.currentQuestion+1
    }) 
})

app.get('/tryAgain', (req,res) => {
    req.session.destroy();
    res.redirect('/');
})

