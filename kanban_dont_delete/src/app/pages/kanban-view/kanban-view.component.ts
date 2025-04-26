import { Component, Input, OnInit, output } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Column } from '../../models/column.model';
import { Task } from '../../models/task.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBug, faCalendar, faPencil, faPenToSquare, faPlus, faSave, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TaskTypeEnum } from '../../models/enum/task.enum';
import { CommonModule } from '@angular/common';
import { SubTask } from '../../models/sub-task.model';

@Component({
  selector: 'app-kanban-view',
  imports: [CommonModule, CdkDrag, CdkDropList, CdkDropListGroup, FontAwesomeModule],
  template: `
  <div class="flex-1 overflow-x-auto p-4">
    <div class="flex gap-4 min-h-[70vh]" cdkDropListGroup>
      @for (column of columns; track column.id; let index = $index) {
        <div class="flex-shrink-0 w-72 bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
          <!-- Column Header -->
          <div class="p-4 font-semibold text-lg bg-gradient-to-r from-purple-100 to-blue-100 border-b border-gray-200">
            {{column.name}}
          </div>

          <!-- Tasks Container -->
          <div 
            class="flex-1 p-3 overflow-y-auto bg-gray-50 min-h-[200px]"
            cdkDropList
            [cdkDropListData]="getTasks(index)"
            (cdkDropListDropped)="drop($event, index)">
            
            <!-- Add Task Button (only in first column) -->
            @if (index === 0) {
              <button 
                class="w-full mb-4 py-2 px-4 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-lg flex items-center justify-center gap-2 transition-colors"
                (click)="newTask.emit()">
                <fa-icon [icon]="faPlus"></fa-icon> Add Task
              </button>
            }
            
            <!-- Tasks -->
            @for(task of getTasks(index); track task.id; let ti = $index) {
              @if (task.ready) {
                <div 
                  class="mb-3 p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  [ngClass]="{
                    'border-l-4 border-blue-500': task.type === enumTaskType.task,
                    'border-l-4 border-red-500': task.type === enumTaskType.bug
                  }"
                  cdkDrag 
                  [cdkDragData]="task"
                  aria-label="Draggable task">
                  <!-- Task Header -->
                  <div 
                    class="font-semibold mb-2 flex items-center gap-2 hover:text-purple-700" 
                    (click)="openTask.emit(task)">
                    <fa-icon 
                      [icon]="getIconType(task.type)" 
                      [ngClass]="{
                        'text-blue-500': task.type === enumTaskType.task,
                        'text-red-500': task.type === enumTaskType.bug
                      }">
                    </fa-icon>
                    <span>{{task.title}}</span>
                  </div>
                  
                  <!-- Description -->
                  @if (task.description) {
                    <p class="text-sm text-gray-600 mb-3">{{task.description}}</p>
                  }
                  
                  <!-- Subtasks Progress -->
                  @if (task.subTasks.length > 0) {
                    <div class="flex items-center gap-2 mt-2">
                      <fa-icon [icon]="faPenToSquare" class="text-yellow-500"></fa-icon>
                      <span class="text-sm font-medium">
                        {{ getCheckedSubTasksCount(task.subTasks) }} / {{task.subTasks.length}}
                      </span>
                      
                      <!-- Mini Progress Bar -->
                      <div class="flex-grow ml-1">
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            class="bg-yellow-400 h-1.5 rounded-full transition-all duration-300" 
                            [style.width.%]="getSubTasksCompletionPercentage(task.subTasks)">
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  
                  <!-- Drag Handle (visual indicator) -->
                  <div class="cdkDragHandle mt-3 flex justify-center">
                    <div class="w-10 h-1 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              }
            }

            <!-- Empty state for column with no tasks -->
            @if (getTasks(index).length === 0) {
              <div class="flex items-center justify-center h-16 text-gray-400 italic text-sm">
                No tasks in this column
              </div>
            }
          </div>
        </div>
      }
    </div>
  </div>`,
})
export class KanbanViewComponent implements OnInit {
  @Input() public columns: Column[] = [];
  @Input() public tasks: Task[] = [];

  public newTask = output<void>();
  public openTask = output<Task>();
  public saveTasks = output<void>();

  public faPencil = faPencil;
  public faSave = faSave;
  public faPlus = faPlus;
  public faCalendar = faCalendar;
  public faBug = faBug;
  public faPenToSquare = faPenToSquare;

  public enumTaskType = TaskTypeEnum;

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<Task[]>, newIndex: number): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const item = event.item.data;
      const task = this.tasks.find(x => x.id === item.id);
      if (task) {
        task.column = newIndex;
        this.saveTasks.emit();
      }
    }
  }

  getIconType(type: number): IconDefinition {
    switch(Number(type)) {
      case this.enumTaskType.bug:
        return this.faBug;
      default:
        return this.faCalendar;
    }
  }

  getTasks(columnIndex: number): Task[] {
    return this.tasks.filter(task => task.column === columnIndex);
  }

  getCheckedSubTasksCount(tasks: SubTask[]): number {
    return tasks.filter(task => task.checked === true).length;
  }

  getSubTasksCompletionPercentage(tasks: SubTask[]): number {
    if (tasks.length === 0) return 0;
    return (this.getCheckedSubTasksCount(tasks) / tasks.length) * 100;
  }
}