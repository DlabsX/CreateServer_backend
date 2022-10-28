let users = [];
let posts = [];

const getUsers = () => {
  return users;
};

const getUsersByName = (name) => {
  const result = users.filter((user) => {
    return user.name === name;
  });
  if (result.length) return result;
  return { error: "Users not found" };
};

const getUserById = (id) => {
  const result = users.find((user) => user.id === parseInt(id));
  if (result) return result;
  return { error: "User not found" };
};

let id = 1;
const createUser = (name, surname, mail, age) => {
  const newUser = {
    id: id++,
    name,
    surname,
    mail,
    age,
    posts: [],
  };

  users.push(newUser);
  return newUser;
};

const updateUser = (id, name, surname,  mail, age) => {
const user = users.find((user)=> user.id === parseInt(id));

if(!user) return {error: "User not found"};

user.name = name;
user.surname = surname; 
user.mail = mail;
user.age = age; 

return user;

};

const deleteUser = (id) => {
    const user = users.find((user) => user.id === parseInt(id));
    if(!user) return {error: "User not found"};

    users = users.filter((user) => user.id !== id);
    return user; 
};



module.exports = {
  getUsers,
  getUsersByName,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
};
