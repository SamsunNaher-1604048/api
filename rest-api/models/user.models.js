const{v4:uuid4}=require("uuid");
let users=[
    {
        id:uuid4(),
        name:"nishi",
        age:23,
    },
    {
        id:uuid4(),
        name:"nill",
        age:56
    }
]

module.exports=users;