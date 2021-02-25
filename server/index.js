const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const FriendModel = require("./models/Friends");

app.use(cors());
app.use(express.json())

/// DATABASE CONNECTION
mongoose.connect(
  "mongodb://localhost:27017/crud?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  { useNewUrlParser: true }
);

app.post("/addfriend", async (req, res) => {

  const name = req.body.name;
  const age = req.body.age;
 const friend = new FriendModel({ name: name, age: age });
 await friend.save();
 res.send("SUCCESS!!");
});

app.get("/read",async(req,res) => {
  FriendModel.find({}, (err,result)=>
  {
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send(result);
    }
      
  });

});

app.put('/update',async (req,res)=>{
  const newAge = req.body.newAge;
  const id = req.body.id;
  console.log(newAge, id);
  try
  {
    await FriendModel.findById(id,(error, friendToUpdate)=>{
      friendToUpdate.age = Number(newAge);
      friendToUpdate.save()
      res.send(friend);
    });
  }
  catch(err)
  {
    console.log(err);
  }

  res.send("updated");
});


app.delete('/delete/:id',async(req,res)=>{
  const id= req.params.id;
  await FriendModel.findByIdAndRemove(id).exec();
  res.send("Item removed");
});

app.listen(3001, ()=>{
    console.log("you are connected");
}); 

