var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vic'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(20, (userObj) => {
    console.log(userObj);
});