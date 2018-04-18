import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app-works';

  constructor(public userService: UsersService) {
    const user = new User('Michael', 'Mendez', 'alex22596@gmail.com', 'alex22596', '12345');
    // this.getAllUsers();
    // this.insertUser(user);
    // this.checkEmailAndPassword('adadafad', 'alex2dad2596@gmail.com');
  }

  insertUser(user: Object) {
    this.userService.addUser(user).subscribe(data => {
      console.log(data);
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
    });
  }

  checkEmailAndPassword(email, password) {
    this.userService.checkEmailAndPassword(email, password).subscribe(data => {
      console.log(data);
    });
  }

}
