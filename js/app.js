const users = [
    {
        name: 'Denis',
        age: 33
    },
    {
        name: 'Petr',
        age: 30
    },
    {
        name: 'Viktor',
        age: 39
    }
    ];

    const usersObj = {};

for (let i = 0; i < users.length; i++) {
    usersObj[users[i].name] = users[i];
}
console.log();
