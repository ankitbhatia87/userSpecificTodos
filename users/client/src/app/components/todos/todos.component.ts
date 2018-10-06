import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [UsersService]
})
export class TodosComponent implements OnInit {

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }
  
  todos: any;

  ngOnInit() {
    this.usersService.getTodosByUserId(this.route.snapshot.params['id'])
    .subscribe( todos => {
      this.todos = todos;
    })
  }
}
