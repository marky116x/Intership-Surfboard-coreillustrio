import { Component, Input, output } from '@angular/core';
import { Column } from '../../models/column.model';
import { Task } from '../../models/task.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBug, faCalendar, faCoffee, faPencil, faPenToSquare, faPlus, faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TaskTypeEnum } from '../../models/enum/task.enum';
import { CommonModule } from '@angular/common';
import { SubTask } from '../../models/sub-task.model';

@Component({
  selector: 'app-table-view',
  imports: [CommonModule, FontAwesomeModule],
  styles: [`
  .task-name {
    cursor: pointer;
  }
  
  .task-name:hover {
    text-decoration: underline;
  }

  `],  
  template: `<div class="p-4">
  <!-- Add Task Button -->
  <div class="mb-4">
    <button 
      class="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-md flex items-center gap-2 transition-colors shadow-sm"
      (click)="newTask.emit()">
      <fa-icon [icon]="faPlus"></fa-icon> 
      <span>Add Task</span>
    </button>
  </div>
  
  <!-- Tasks Table -->
  <div class="overflow-x-auto rounded-lg shadow border border-white/10">
    <table class="w-full bg-black/20 backdrop-blur-sm border-collapse">
      <thead>
        <tr class="bg-black/30 text-white/90 border-b border-white/10">
          <th class="w-12 p-3 text-left font-semibold"></th>
          <th class="w-44 p-3 text-left font-semibold">Task</th>
          <th class="w-32 p-3 text-left font-semibold">Status</th>
          <th class="p-3 text-left font-semibold">Description</th>
          <th class="w-32 p-3 text-left font-semibold">CheckList</th>
        </tr>
      </thead>
      <tbody>
        @if (tasks.length == 0) {
          <tr>
            <td class="p-4 text-center text-white/60" colspan="5">No tasks found. Click "Add Task" to create one.</td>
          </tr>
        }
        @for (task of tasks; track $index) {
          <tr class="border-b border-white/10 hover:bg-white/5 transition-colors">
            <td class="p-3">
              <fa-icon 
                [icon]="getIconType(task.type)" 
                [ngClass]="{
                  'text-blue-400': task.type === enumTaskType.task,
                  'text-red-400': task.type === enumTaskType.bug
                }">
              </fa-icon>
            </td>
            <td class="p-3">
              <span 
                class="font-medium cursor-pointer hover:text-purple-300 transition-colors"
                (click)="openTask.emit(task)">
                {{task.title || 'Untitled Task'}}
              </span>
            </td>
            <td class="p-3">
              <span class="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20">
                {{getColName(task.column)}}
              </span>
            </td>
            <td class="p-3 text-white/80 text-sm">{{task.description || 'No description'}}</td>
            <td class="p-3">
              @if (task.subTasks.length > 0) {
                <div class="flex items-center gap-2">
                  <fa-icon [icon]="faPenToSquare" class="text-yellow-300"></fa-icon>
                  <span class="text-sm">
                    {{ getCheckedSubTaksLength(task.subTasks) }} / {{task.subTasks.length}}
                  </span>
                  
                  <!-- Mini Progress Bar -->
                  <div class="w-16 ml-1">
                    <div class="w-full bg-white/20 rounded-full h-1.5">
                      <div 
                        class="bg-purple-400 h-1.5 rounded-full transition-all duration-300" 
                        [style.width.%]="(getCheckedSubTaksLength(task.subTasks) / task.subTasks.length) * 100">
                      </div>
                    </div>
                  </div>
                </div>
              } @else {
                <span class="text-xs text-white/50">No items</span>
              }
            </td>
          </tr>
        }
      </tbody>
    </table>
  </div>
</div>`,
})
export class TableViewComponent {

  @Input() public columns: Column[] = [];
  @Input() public tasks: Task[] = []

  public newTask = output<void>();
  public openTask = output<Task>();

  public faCoffee = faCoffee;
  public faPencil = faPencil;
  public faSave = faSave;
  public faPlus = faPlus;
  public faCalendar = faCalendar;
  public faBug = faBug;
  public faPenToSquare = faPenToSquare;

  public enumTaskType = TaskTypeEnum;

  constructor() {}

  getIconType(type: number): IconDefinition {
    switch(Number(type)) {
      case this.enumTaskType.bug:
        return this.faBug;
        break;
      default:
        return this.faCalendar;
    }
  }

  getTasks(col: number) {
    return this.tasks.filter(x => x.column == col);
  }

  getCheckedSubTaksLength(tasks: SubTask[]): number {
    return tasks.filter(x => x.checked == true).length;
  }

  getColName(index: number): string {
    return this.columns[index].name;
  }
}