import { Component } from '@angular/core';
import { TodoListComponent } from './todolist.component';
import { TodoService } from './todo.service';

@Component({
  moduleId: module.id,
  selector: 'todomvc-app',
  templateUrl: 'todomvc.component.html',
  styleUrls: ['todomvc.component.css'],
  directives: [TodoListComponent],
  providers: [TodoService]
})
export class TodomvcAppComponent {
  title = 'todomvc works!';
}
