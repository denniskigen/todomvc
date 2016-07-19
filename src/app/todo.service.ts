import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
    todos: Todo[];

    constructor() {
        let persistedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        this.todos = persistedTodos.map(( todo: { _title: string, completed: boolean } ) => {
            let ret = new Todo(todo._title);
            ret.completed = todo.completed;
            return ret;
        });
    }

    private updateStore() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    add(title: string) {
        this.todos.push(new Todo(title));
        this.updateStore();
    }

    remove(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.updateStore();
    }

    toggleCompletion(todo: Todo) {
        todo.completed = !todo.completed;
        this.updateStore();
    }

    allCompleted() {
        return this.todos.length === this.getCompleted().length;
    }

    private getWithCompleted(completed: boolean) {
        return this.todos.filter((todo: Todo) => todo.completed === completed ); 
    }

    getCompleted() {
        return this.getWithCompleted(true);
    }

    setAllTo(completed: boolean) {
        this.todos.forEach((t: Todo) => t.completed = completed);
        this.updateStore();
    }

    getRemaining() {
        return this.getWithCompleted(false);
    }

    removeCompleted() {
        this.todos = this.getWithCompleted(false);
        this.updateStore();
    }
}