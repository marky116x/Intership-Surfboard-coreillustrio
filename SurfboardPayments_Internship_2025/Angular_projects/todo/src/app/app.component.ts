// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen bg-gray-100 py-8 px-4">
      <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 class="text-2xl font-bold text-gray-800 mb-6">Todo List</h1>
        
        <!-- Todo Form -->
        <form [formGroup]="todoForm" (ngSubmit)="addTodo()" class="flex gap-2 mb-6">
          <input
            type="text"
            formControlName="todoText"
            placeholder="Add a new todo..."
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          <button
            type="submit"
            [disabled]="!todoForm.valid"
            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </form>

        <!-- Todo List -->
        @if (todos.length === 0) {
          <p class="text-gray-500 text-center">No todos yet. Add one above!</p>
        } @else {
          <ul class="space-y-2">
            @for (todo of filteredTodos; track todo.id) {
              <li class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  [checked]="todo.completed"
                  (change)="toggleTodo(todo.id)"
                  class="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"
                >
                <span [class.line-through]="todo.completed" [class.text-gray-500]="todo.completed">
                  {{ todo.text }}
                </span>
                <button
                  (click)="deleteTodo(todo.id)"
                  class="ml-auto text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </li>
            }
          </ul>
        }

        <!-- Filter Controls -->
        @if (todos.length > 0) {
          <div class="mt-6 flex justify-between items-center text-sm">
            <div class="space-x-2">
              <button
                (click)="setFilter('all')"
                [class.text-blue-600]="currentFilter === 'all'"
                [class.font-semibold]="currentFilter === 'all'"
                class="hover:text-blue-600"
              >
                All
              </button>
              <button
                (click)="setFilter('active')"
                [class.text-blue-600]="currentFilter === 'active'"
                [class.font-semibold]="currentFilter === 'active'"
                class="hover:text-blue-600"
              >
                Active
              </button>
              <button
                (click)="setFilter('completed')"
                [class.text-blue-600]="currentFilter === 'completed'"
                [class.font-semibold]="currentFilter === 'completed'"
                class="hover:text-blue-600"
              >
                Completed
              </button>
            </div>
            <button
              (click)="clearCompleted()"
              class="text-gray-500 hover:text-gray-700"
              [disabled]="completedCount === 0"
              [class.opacity-50]="completedCount === 0"
              [class.cursor-not-allowed]="completedCount === 0"
            >
              Clear completed
            </button>
          </div>
        }
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  todoForm: FormGroup;
  todos: Todo[] = [];
  currentFilter: 'all' | 'active' | 'completed' = 'all';
  
  private nextId = 1;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      todoText: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  get filteredTodos(): Todo[] {
    switch (this.currentFilter) {
      case 'active':
        return this.todos.filter(todo => !todo.completed);
      case 'completed':
        return this.todos.filter(todo => todo.completed);
      default:
        return this.todos;
    }
  }

  get completedCount(): number {
    return this.todos.filter(todo => todo.completed).length;
  }

  addTodo(): void {
    if (this.todoForm.valid) {
      const todoText = this.todoForm.get('todoText')?.value.trim();
      if (todoText) {
        this.todos.push({
          id: this.nextId++,
          text: todoText,
          completed: false
        });
        this.todoForm.reset();
      }
    }
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  setFilter(filter: 'all' | 'active' | 'completed'): void {
    this.currentFilter = filter;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}