var Userdb = require('../model/model');


// create and save a new users
exports.create= (req, res) =>{
// validation
if(!req.body){
    res.status(400).send({
        message: "Content can not be empty!!"
    });
    return;
}  
    // new users
    const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status
    });

    // save user in database
  
    user
    .save(user)
    .then(data =>{
        // res.send(data)
        res.redirect('/add-user');
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error is occurred while creating a created operation"
        });
    });


}
 
// retrieve and return all users/ retrive and return signle user
exports.find =(req,res)=>{
   if(req.query.id){
    const id = req.query.id;
      Userdb.findById(id).then(data =>{
          if(!data){
              res.status(404).send({message: "your id is invalid ID"})
          }else{
              res.send(data);
          }
      })
      .catch( err => {
          res.status(500).send({message: "error occurred while retriving user information please try again!!"})
      })
   }else{
    //    return all users
    Userdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({message: err.message || "error occurred while retriving user information"})
    })
   }

}

// update idetified user account by user id
exports.update =(req, res)=>{
// validation
if(!req.body){
    return res.status(400).send({message: "data to update can not be empty"});
}

// update user information
const id = req.params.id;
Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
.then(data => {
    if(!data){
        res.status(404).send({message: `cannot update user with ${id}. may be user not found!` })
    }else{
        res.send(data);
    }
})
.catch (err =>{
    res.status(500).send({message: "Error occurred while update user information!"})
})
}

// delete a user with specified user is in the request
exports.delete =(req,res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send({message: "cannot delete user with this Id . May be user not found!!"})
        }
        else{
            res.send(data);
        }
    })
    .catch (err =>{
        res.status(500).send({message: "User was delete successfuly!"})
    })
}