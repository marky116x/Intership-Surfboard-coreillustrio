import { Component, Input, OnInit, output } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
 
import { Task } from '../../models/task.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBug, faCalendar, faCheck, faClose, faPencil, faPlus, faSave, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubTask } from '../../models/sub-task.model';
import { TaskTypeEnum } from '../../models/enum/task.enum';
import { CommonModule } from '@angular/common';
import { Column } from '../../models/column.model';

@Component({
  selector: 'app-add-task',
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, FormsModule],
  template: `
  <!-- Header -->
  <div class="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-purple-100 to-blue-100">
    <h5 class="text-lg font-bold flex items-center">
      <!-- Dynamic icon based on task type -->
      <span 
        [ngClass]="{'text-red-500': task.type === enumTaskType.bug, 'text-blue-500': task.type === enumTaskType.task}" 
        class="mr-2">
        <fa-icon [icon]="getIconType(task.type)"></fa-icon>
      </span>
      {{ task.ready ? 'Edit Task' : 'New Task' }}
    </h5>
    <button 
      type="button" 
      class="text-gray-500 hover:text-gray-700 transition-colors" 
      aria-label="Close" 
      (click)="close.emit()">
      <fa-icon [icon]="faClose"></fa-icon>
    </button>
  </div>
  
  <!-- Body -->
  <div 
    [ngClass]="{'bg-blue-50': task.type === enumTaskType.task, 'bg-red-50': task.type === enumTaskType.bug}" 
    class="p-5">
    
    <!-- Name and Type Row -->
    <div class="flex flex-col md:flex-row gap-4 mb-5">
      <div class="md:w-2/3">
        <label for="task-name" class="block font-semibold text-gray-700 mb-2">Name:</label>
        <input 
          id="task-name"
          type="text" 
          name="name" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
          [(ngModel)]="task.title" 
          placeholder="Enter task name"
          required />
      </div>
      <div class="md:w-1/3">
        <label for="task-type" class="block font-semibold text-gray-700 mb-2">Type:</label>
        <select 
          id="task-type"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
          [(ngModel)]="task.type">
          <option [value]="enumTaskType.task">Task</option>
          <option [value]="enumTaskType.bug">Bug</option>
        </select>
      </div>
    </div>
  
    <!-- Description -->
    <div class="mb-5">
      <label for="task-description" class="block font-semibold text-gray-700 mb-2">Description:</label>
      <textarea 
        id="task-description"
        name="description" 
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px]" 
        [(ngModel)]="task.description"
        placeholder="Enter task description"></textarea>
    </div>
  
    <!-- Checklist -->
    <div class="mb-3">
      <div class="flex justify-between items-center mb-2">
        <label class="block font-semibold text-gray-700">Checklist</label>
        
        <!-- Progress percentage when task is ready and has subtasks -->
        @if (hasSubTasks() && task.ready) {
          <span class="text-sm text-gray-600">{{ getCheckedPercentage() | number: '1.0-0' }}% completed</span>
        }
      </div>
      
      <!-- Progress bar -->
      @if (hasSubTasks() && task.ready) {
        <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            class="bg-purple-600 h-2.5 rounded-full transition-all duration-300" 
            [style.width.%]="getCheckedPercentage()" 
            aria-valuenow="getCheckedPercentage()" 
            aria-valuemin="0" 
            aria-valuemax="100">
          </div>
        </div>
      }
      
      <!-- Subtasks -->
      <div class="space-y-3 mb-3">
        @for(sub of task.subTasks; track $index; let i = $index) {
          <div class="flex items-center gap-3 bg-white p-2 rounded-lg border border-gray-200">
            @if (task.ready) {
              <div>
                <input 
                  [id]="'check-sub-task' + i" 
                  class="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer" 
                  type="checkbox" 
                  [(ngModel)]="sub.checked" />
              </div>
            }
            <input 
              type="text" 
              [(ngModel)]="sub.title" 
              placeholder="Enter subtask"
              class="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button 
              class="p-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-md transition-colors"
              aria-label="Remove subtask" 
              (click)="removeSubTask(i)">
              <fa-icon [icon]="faTrash"></fa-icon>
            </button>
          </div>
        }
      </div>
      
      <!-- Add subtask button -->
      <button 
        class="mt-2 px-4 py-2 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-md flex items-center gap-2 transition-colors" 
        (click)="addSubTask()">
        <fa-icon [icon]="faPlus"></fa-icon> 
        <span>Add item</span>
      </button>
    </div>
  </div>
  
  <!-- Footer -->
  <div class="flex justify-end p-4 gap-3 border-t border-gray-200 bg-gray-50">
    @if (task.ready) {
      <button 
        class="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-50 rounded-md flex items-center gap-2 transition-colors" 
        (click)="removeTaksById()">
        <fa-icon [icon]="faTrash"></fa-icon> 
        <span>Remove</span>
      </button>
    }
    <button 
      type="submit" 
      class="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-md flex items-center gap-2 transition-colors" 
      (click)="submitForm()">
      <fa-icon [icon]="faSave"></fa-icon> 
      <span>Save</span>
    </button>
  </div>`,
})
export class AddTaskComponent implements OnInit {
  @Input() public task: Task = new Task(1, '');
  @Input() public columns: Column[] = []; // Add this input property for the columns

  public close = output<void>();
  public saveTasks = output<void>();
  public removeTask = output<number>();

  public faTrash = faTrash;
  public faPlus = faPlus;
  public faSave = faSave;
  public faPencil = faPencil;
  public faCheck = faCheck;
  public faClose = faClose;
  public faCalendar = faCalendar;
  public faBug = faBug;

  public enumTaskType = TaskTypeEnum;

  constructor() {}

  ngOnInit(): void {}

  addSubTask(): void {
    const sub = new SubTask("");
    this.task.subTasks.push(sub);
  }

  removeSubTask(index: number): void {
    this.task.subTasks.splice(index, 1);
  }

  hasSubTasks(): boolean {
    return this.task.subTasks.length > 0;
  }

  getIconType(type: number): IconDefinition {
    switch(Number(type)) {
      case this.enumTaskType.bug:
        return this.faBug;
      default:
        return this.faCalendar;
    }
  }

  getCheckedPercentage(): number {
    if (this.task.subTasks.length === 0) return 100;
    const checkedTasks = this.task.subTasks.filter(task => task.checked).length;
    return (checkedTasks / this.task.subTasks.length) * 100;
  }

  submitForm(): void {
    this.task.ready = true;
    this.saveTasks.emit();
    this.close.emit();
  }

  removeTaksById(): void {
    this.removeTask.emit(this.task.id);
    this.close.emit();
  }
}