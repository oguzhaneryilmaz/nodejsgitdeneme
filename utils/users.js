const fs = require('fs');

const get_users = function() {
    const users = load_users()
    return users
}

const load_users = function() {
    try {
        const data_buffer = fs.readFileSync("./public/users.json")
        const data_string = data_buffer.toString()
        data_object = JSON.parse(data_string)
        return data_object
    } catch (error) {
        return []
    }
}

const get_by_username = function(username) {
    const users = load_users()
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        console.log(user.username);
        if (user.username == username) {
            return user
        }

    }
    return { error: "User not found" }
}

const add_user = function(user) {
    const users = load_users()
    const duplicate_users = users.filter((e) => {
        return e.username == user.username
    })
    if (duplicate_users.length != 0)
        return { error: "Error" }
    users.push(user)
    save_user(users)
    return { result: user.ad + " " + user.soyad + " is added" }
}

const save_user = function(users) {
    const users_json_str = JSON.stringify(users)
    fs.writeFileSync("./public/users.json", users_json_str)

}

module.exports = {
    get_users: get_users,
    get_by_username: get_by_username,
    add_user: add_user
}