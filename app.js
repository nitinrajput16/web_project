const express= require("express");//server ke liye he ye
const app=express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('public/pages'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
