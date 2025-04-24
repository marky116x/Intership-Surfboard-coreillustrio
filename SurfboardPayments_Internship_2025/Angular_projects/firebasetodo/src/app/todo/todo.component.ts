import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TodoService, Todo } from '../services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
 
})
export class TodoComponent implements OnInit {
  private authService = inject(AuthService);
  private todoService = inject(TodoService);
  private fb = inject(FormBuilder);
  
  todoForm: FormGroup = this.fb.group({
    todoText: ['', [Validators.required, Validators.minLength(1)]]
  });
  
  todos = this.todoService.getTodos();
  filteredTodos$: Observable<Todo[]> = this.todos;
  currentFilter: 'all' | 'active' | 'completed' = 'all';

  ngOnInit() {
    this.updateFilteredTodos();
  }

  async addTodo() {
    if (this.todoForm.valid) {
      const todoText = this.todoForm.get('todoText')?.value.trim();
      if (todoText) {
        await this.todoService.addTodo(todoText);
        this.todoForm.reset();
      }
    }
  }

  async toggleTodo(todo: Todo) {
    if (todo.id) {
      await this.todoService.updateTodo(todo.id, !todo.completed);
    }
  }

  async deleteTodo(todo: Todo) {
    if (todo.id) {
      await this.todoService.deleteTodo(todo.id);
    }
  }

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.currentFilter = filter;
    this.updateFilteredTodos();
  }

  updateFilteredTodos() {
    this.filteredTodos$ = new Observable(observer => {
      this.todos.subscribe(todos => {
        let filtered = todos;
        switch (this.currentFilter) {
          case 'active':
            filtered = todos.filter(todo => !todo.completed);
            break;
          case 'completed':
            filtered = todos.filter(todo => todo.completed);
            break;
        }
        observer.next(filtered);
      });
    });
  }

  logout() {
    this.authService.logout();
  }
}