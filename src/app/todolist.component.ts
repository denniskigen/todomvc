import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todolist.component.html'
})

export class TodoListComponent {
    title = 'todos';
    newTodoText = '';

    constructor(private todoService: TodoService) {}

    addTodo() {
        if (this.newTodoText.trim().length > 1) {
            this.todoService.add(this.newTodoText);
            this.newTodoText = '';
        }
    }

    editTodo(todo: Todo) {
        todo.editing = true;
    }

    updateEditingTodo(todo: Todo, editedTitle: string) {
        editedTitle = editedTitle.trim();
        todo.editing = false;

        if (editedTitle.length === 0) {
            return this.todoService.remove(todo);
        }

        todo.title = editedTitle;
    }

    cancelEditingTodo(todo: Todo) {
        todo.editing = false;
    }

    stopEditing(todo: Todo, editedTitle: string) {
        todo.title = editedTitle;
        todo.editing = false;
    }
}