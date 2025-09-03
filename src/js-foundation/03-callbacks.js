const users = [{
    id: 1,
    name: 'Jhon Doe',
},{
    id: 2,
    name: 'Jane Doe',
}
];

function getUserByID(id, callback){
    //arrow function
    // users.find(user => user.id === id);

    const user = users.find( function(user){
        return user.id === id;
    });
    // console.log({user});

    if(!user){
        return callback(`User not found with id ${id}`);
    }

    return callback(null, user);
}


module.exports = {
    getUserByID,
}