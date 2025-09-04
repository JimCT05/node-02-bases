const users = [{
    id: 1,
    name: 'Jhon Doe',
},{
    id: 2,
    name: 'Jane Doe',
}
];

const getUserByID = (id, callback) => {
    //arrow function
    // users.find(user => user.id === id);
    const user = users.find(user => user.id === id);
    
    // console.log({user});

    // if(!user){
    //     return callback(`User not found with id ${id}`);
    // }

    //     return callback(null, user);

    //el if anterior se puede poner con un ternario
    (user)
        ? callback(null, user)
        : callback(`User not found with id ${id}`);
}


module.exports = {
    getUserByID,
}