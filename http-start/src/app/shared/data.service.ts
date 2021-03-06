import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Todo } from '../tasks/todo.model';

@Injectable()
export class DataService {
    nameOfUser = "";
    userNameUpdated = new Subject < string > ();
    code = "";
    accessTokenAdded = new Subject < {} > ();

    todos = [];
    todosUpdated = new Subject < Todo[] > ();
    recentTodos = [];
    recentTodosUpdated = new Subject < Todo[] > ();

    newTodoAdded = new Subject < Todo[] > ();
    newCommentAdded = new Subject < Todo[] > ();
    notificationClicked = new Subject < {} > ();

    constructor(private http: Http) {

    }
    ngOnInit() {

    }

    getNameOfUser() {
        return this.nameOfUser;
    }

    addUserName(nameOfUser) {
        this.nameOfUser = nameOfUser;
        this.userNameUpdated.next(this.nameOfUser);
    }

    getTodos() {
        return this.todos;
    }

    addTodos(todos) {
        this.todos = todos;
        this.todosUpdated.next(this.todos);
    }

    addRecentTodos(todos) {
        this.recentTodos = todos;
        this.recentTodosUpdated.next(this.recentTodos);
    }

    getRecentTodos() {
        return this.recentTodos;
    }

    triggerEventForNotification(todoItem) {
        if (todoItem.newTodo) {
            this.newTodoAdded.next(todoItem);
        } else if (todoItem.newComment) {
            this.newCommentAdded.next(todoItem);
        }
    }

    openEnterTimeForm(todos) {
        this.notificationClicked.next(todos);
    }

    addAccessToken(token) {
        this.code = token;
        this.accessTokenAdded.next({});
    }


}