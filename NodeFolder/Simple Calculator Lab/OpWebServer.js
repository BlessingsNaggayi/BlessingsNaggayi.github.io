

const express = require('express');
const path = require('path');
const port =process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res) => {

    res.sendFile(path.join(__dirname,'calc.html'));

})


app.post('/calculate',(req,res) => {

    const { num1, num2, operation } = req.body;

    let result;
    switch (operation) {
      case 'Add':
        result = parseInt(num1) + parseInt(num2);
        break;
      case 'Subtract':
        result = parseInt(num1) - parseInt(num2);
        break;
      case 'Multiply':
        result = parseInt(num1) * parseInt(num2);
        break;
      case 'Divide':
        result = parseInt(num1) / parseInt(num2);
        break;
      default:
        return res.status(400).send('Invalid operation');

    }

    res.send(`The Answer is: ${result}<br><a href="/">Another calculation</a>`)
 

    
});

app.listen(port, () => {
    console.log(`Server is running....`);
  });

