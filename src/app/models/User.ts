export class User {
  name: String;
  lastName: String;
  email: String;
  username: String;
  password: String;
  farms = [];

  constructor(name: String, lastName: String, email: String, username: String, password: String) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.farms = [];
  }
}


