const users = [{
    id: 1,
    name: 'Jhon Doe',
},{
    id: 2,
    name: 'Jane Doe',
}
];function getUserByID(id){
    //arrow function
    // users.find(user => user.id === id);

    const user = users.find( function(user){
        return user.id === id;
    });
    console.log({user});
}


module.exports = {
    getUserByID,
}