import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Users} from '../../services/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }
  users: any;
  ngOnInit() {
    this.usersService.getUsers()
    .subscribe( users  => {
      this.users = users;
    })
  }

  loadUserDetails(user) {
    this.router.navigate(['/details', user.id])
  }

}