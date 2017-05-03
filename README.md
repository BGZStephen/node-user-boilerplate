A node boilerplate to handle user registration, authentication and updates.

Features:

* Counter for generating unique ID's for users
* Registration endpoint which checks for existing usersname / email to avoid duplicated accounts
* Bcrypt encryption for passwords stored within the database
* User authentication endpoint for login processing
* Update user endpoint which can accept updated user objects to change a users profile
* Update password which handles comparing passwords to stored hashes and updating if matched
* Additional User endpoints to handle: deleteOne, deleteAll, getOne, getByUsername, getById, getByEmail,

Endpoints:

// authenticate

user/authenticate

  let userObject = {
    username: ,
    queryPassword: ,
  }

returns: Success: True / Success: False


user/create

  {
    firstName: ,
    lastName: ,
    username: ,
    email: ,
    password:
  }

returns: Success: True / Success: False


user/deleteAll
  {

  }

returns: Success: True / Success: False

user/deleteOne
  {
    userId:
  }

returns: Success: True / Success: False

// get by email
user/getByEmail
  {
    email: req.body.email
  }

returns: Success: True, msg: User Object / Success: False

// get by username
user/getByUsername
  {
    username:
  }

returns: Success: True / Success: False

// register
user/register

  {
    firstName: ,
    lastName: ,
    username: ,
    email: ,
    password:
  }

returns: Success: True / Success: False

// update
user/update

  {
    firstName: ,
    lastName: ,
    username: ,
    email: ,
    userId:
  }

returns: Success: True / Success: False

// update password
user/updatepassword

  {
    userId: ,
    queryPassword: ,
    newPassword:
  }

returns: Success: True / Success: False
