import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };

  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;
  showUserForm: false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private dataService: UserService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });

    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit({value, valid}: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

     this.dataService.addUser(value);

      this.form.reset();
    }
  }
}
