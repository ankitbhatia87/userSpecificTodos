import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [UsersService]
})
export class DetailsComponent implements OnInit {
  
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  user:any;
  todos: any;
  isOn: Boolean;

  ngOnInit() {
    this.usersService.getUserById(this.route.snapshot.params['id'])
    .subscribe( user => {
      this.user = user;
    });
  }

  showTodos() {
    this.isOn = true;
  }
}
