

const express = require('express');
const path = require('path');


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
        result = num1 + num2;
        break;
      case 'Subtract':
        result = num1 - num2;
        break;
      case 'Multiply':
        result = num1 * num2;
        break;
      case 'Divide':
        result = num1 / num2;
        break;
      default:
        return res.status(400).send('Invalid operation');

    }

    res.send(result.toString());

    
});

app.listen(3000, () => {
    console.log(`Server is running....`);
  });

