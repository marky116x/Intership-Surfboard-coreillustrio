import { Component, inject, OnInit, signal, TemplateRef, ViewChild, WritableSignal } from '@angular/core';
import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';
import { Task } from '../../models/task.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faBug, faCalendar, faCoffee, faList, faPencil, faPlus, faSave, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditBoardComponent } from '../edit-board/edit-board.component';
import { AddTaskComponent } from "../add-task/add-task.component";
import { TaskTypeEnum } from '../../models/enum/task.enum';
import { CommonModule } from '@angular/common';
import { KanbanViewComponent } from '../kanban-view/kanban-view.component';
import { TableViewComponent } from '../table-view/table-view.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  imports: [CommonModule, FontAwesomeModule, EditBoardComponent, AddTaskComponent, KanbanViewComponent, TableViewComponent, FormsModule],
  template: `<div class="flex flex-col h-screen bg-gray-50">
  <!-- Navigation Bar -->
  <nav class="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md py-3 px-4">
  <div class="flex items-center justify-between">
    
    <!-- Logo and Title -->
    <h1 class="text-xl font-bold flex items-center space-x-2">
      <fa-icon [icon]="faCoffee"></fa-icon>
      <span>Kanban-board by Mark.</span>
    </h1>

    <!-- Right Section (Dropdown + Button) -->
    <div class="flex items-center space-x-4">
      
      <!-- Board Selection Dropdown -->
      <div class="relative">
        <select 
          class="bg-white bg-opacity-80 text-black rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 appearance-none"
          [(ngModel)]="selectedBoardId"
          (change)="selectBoard()">
          @for (board of boards; track board.id) {
            <option [value]="board.id">{{ board.name }}</option>
          }
        </select>

        <!-- Dropdown Icon -->
        <svg
          class="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
            clip-rule="evenodd" />
        </svg>
      </div>

      <!-- Create New Board Button -->
      <button 
        class="bg-white text-black bg-opacity-20 hover:bg-opacity-30 rounded-md p-1.5 transition-colors flex items-center space-x-1"
        (click)="createNewBoard()">
        <svg 
          class="h-5 w-5 text-black" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>


      <!-- Logout -->
      <header class="  text-white px-4 py-3 flex justify-between items-center shadow-md">
       
      
      <div>
        <button 
          (click)="logout()" 
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 flex items-center"
        >
          <span>Logout</span>
        </button>
      </div>
    </header>

    </div>
  </div>
</nav>


  <!-- Main Board Area -->
  <div class="flex-1 flex flex-col overflow-hidden">
    <!-- Board Header -->
    <div class="bg-white shadow px-4 py-3 flex items-center justify-between border-b border-gray-200">
      <div class="flex items-center">
        <h2 class="text-lg font-semibold text-gray-800">{{currentBoard.name}}</h2>
        
        <!-- Edit Board Button -->
        <button 
          class="ml-2 p-2 text-purple-600 hover:bg-purple-50 rounded-full transition-colors" 
          (click)="open(editBoard)">
          <fa-icon [icon]="faPencil"></fa-icon>
        </button>
      </div>
      
      <div class="flex items-center space-x-2">
        <!-- Toggle View Button -->
        <button 
          class="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors" 
          (click)="tableView = !tableView"
          [attr.aria-label]="tableView ? 'Switch to Kanban View' : 'Switch to Table View'">
          <fa-icon [icon]="tableView ? faList : faBars"></fa-icon>
          <span class="ml-1 text-sm">{{ tableView ? 'Kanban View' : 'Table View' }}</span>
        </button>
      </div>
    </div>

    <!-- Board Content Area -->
    <div class="flex-1 overflow-auto">
      @if(tableView) {
        <app-table-view 
          [columns]="currentBoard.columns"
          [tasks]="boardTasks"
          (newTask)="newTaskModal(newTask)"
          (openTask)="openTaskModal(newTask, $event)">
        </app-table-view>
      } @else {
        <app-kanban-view 
          [columns]="currentBoard.columns"
          [tasks]="boardTasks"
          (saveTasks)="saveTasks()"
          (newTask)="newTaskModal(newTask)"
          (openTask)="openTaskModal(newTask, $event)">
        </app-kanban-view>
      }
    </div>
  </div>
</div>
<!-- Edit Board Modal Template -->
<ng-template #editBoard let-modal>
  <div class="modal-wrapper fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-30">
    <div class="modal-container bg-white rounded-lg shadow-lg w-full max-w-md mx-auto transition-all duration-300 ease-in-out">
      <div class="modal-header bg-gradient-to-r from-purple-50 to-blue-50 border-b p-4 flex justify-between items-center">
        <h4 class="modal-title text-lg font-semibold text-purple-800">Edit Board</h4>
        <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
      </div>
      <div class="modal-body max-h-[70vh] overflow-y-auto p-4">
        <app-edit-board [board]="currentBoard" (close)="modal.dismiss('Cross click'); saveBoards()" />
      </div>
    </div>
  </div>
</ng-template>

<!-- Task Modal Template -->
<ng-template #newTask let-modal>
  <div class="modal-wrapper fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="modal-container bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
      <div class="modal-header bg-gradient-to-r from-purple-50 to-blue-50 border-b flex justify-between items-center p-4">
        <h4 class="modal-title text-lg font-semibold text-purple-800">
          {{selectedTask.id === 0 ? 'Add New Task' : 'Edit Task'}}
        </h4>
        <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
      </div>
      <div class="modal-body p-4 max-h-[70vh] overflow-y-auto">
        <app-add-task 
          [task]="selectedTask"
          (close)="modal.dismiss('Cross click')"
          (saveTasks)="saveTasks()"
          (removeTask)="removeTask($event)"
        />
      </div>
    </div>
  </div>
</ng-template>
<!-- New Board Modal Template -->
<ng-template #newBoardModal let-modal>
  <div class="modal-wrapper fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="modal-container bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
      <div class="modal-header bg-gradient-to-r from-purple-50 to-blue-50 border-b p-4">
        <h4 class="modal-title text-lg font-semibold text-purple-800">Create New Board</h4>
        <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
      </div>
      <div class="modal-body max-h-[70vh] overflow-y-auto py-4">
        <div class="p-4">
          <div class="mb-6">
            <label class="block font-medium text-gray-700 mb-2">Board Name</label>
            <input 
              type="text" 
              class=" placeholder-gray-200 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm" 
              [(ngModel)]="newBoardName"

              placeholder="My Awesome Board"
              autofocus />
          </div>
        </div>
      </div>
      <div class="modal-footer bg-gray-50 border-t py-3 px-4">
        <div class="flex justify-end space-x-3">
          <button 
            class="px-5 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors" 
            (click)="modal.dismiss('Cancel')">
            Cancel
          </button>
          <button 
            class="px-5 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-lg transition-colors shadow-sm" 
            [disabled]="!newBoardName"
            [ngClass]="{'opacity-50 cursor-not-allowed': !newBoardName, 'hover:shadow-md': newBoardName}"
            (click)="createBoard(); modal.close('Board created')">
            Create Board
          </button>
        </div>
      </div>
    </div>
  </div>
</ng-template>












`,
})
export class MainViewComponent implements OnInit {
  @ViewChild('newBoardModal') newBoardModal!: TemplateRef<any>;

  private modalService = inject(NgbModal);
  closeResult: WritableSignal<string> = signal('');

  public faCoffee = faCoffee;
  public faPencil = faPencil;
  public faSave = faSave;
  public faPlus = faPlus;
  public faCalendar = faCalendar;
  public faBug = faBug;
  public faBars = faBars;
  public faList = faList;
  public faTimes = faTimes; // Added this for the close icon

  public enumTaskType = TaskTypeEnum;
  public tableView: boolean = false;
  
  // Multiple boards support
  public boards: Board[] = [];
  public selectedBoardId: number = 1;
  public currentBoard: Board = new Board(1, "My Board", []);
  public newBoardName: string = '';
  
  // Tasks for current board
  public boardTasks: Task[] = [];
  public selectedTask: Task = new Task(0, '');

  constructor() {}

  ngOnInit(): void {
    // Load boards from localStorage
    const storedBoards = JSON.parse(localStorage.getItem("boards") || 'null');
    if (storedBoards != null) {
      this.boards = storedBoards;
    } else {
      // Initialize with a default board
      const defaultBoard = new Board(1, "My First Board", []);
      defaultBoard.columns.push(new Column("Idea"));
      defaultBoard.columns.push(new Column("Research"));
      defaultBoard.columns.push(new Column("Todo"));
      defaultBoard.columns.push(new Column("Done"));
      this.boards.push(defaultBoard);
      this.saveBoards();
    }
    
    // Load tasks for all boards
    const allTasks = JSON.parse(localStorage.getItem("allTasks") || '{}');
    
    // Set current board
    const lastSelectedBoardId = parseInt(localStorage.getItem("selectedBoardId") || '1');
    this.selectedBoardId = lastSelectedBoardId;
    this.selectBoard();
  }
  
  selectBoard(): void {
    // Find the selected board
    const board = this.boards.find(b => b.id === parseInt(this.selectedBoardId.toString()));
    if (board) {
      this.currentBoard = board;
      // Load tasks for this board
      this.loadBoardTasks();
      // Save selection to localStorage
      localStorage.setItem("selectedBoardId", this.selectedBoardId.toString());
    }
  }
  
  loadBoardTasks(): void {
    // Load all tasks from localStorage
    const allTasks = JSON.parse(localStorage.getItem("allTasks") || '{}');
    // Get tasks for the current board
    this.boardTasks = allTasks[this.currentBoard.id] || [];
  }
  
  createNewBoard(): void {
    this.newBoardName = '';
    // Use the open method with the template reference
    this.open(this.newBoardModal);
  }
  
  createBoard(): void {
    if (this.newBoardName?.trim()) {
      // Find the highest board ID
      const maxId = this.boards.reduce((max, board) => Math.max(max, board.id), 0);
      
      // Create a new board with default columns
      const newBoard = new Board(maxId + 1, this.newBoardName.trim(), []);
      newBoard.columns.push(new Column("Backlog"));
      newBoard.columns.push(new Column("In Progress"));
      newBoard.columns.push(new Column("Review"));
      newBoard.columns.push(new Column("Done"));
      
      // Add the new board and select it
      this.boards.push(newBoard);
      this.selectedBoardId = newBoard.id;
      this.selectBoard();
      
      // Save boards to localStorage
      this.saveBoards();
    }
  }
  
  saveBoards(): void {
    localStorage.setItem("boards", JSON.stringify(this.boards));
  }

  saveTasks(): void {
    // Save all tasks with board ID as key
    const allTasks = JSON.parse(localStorage.getItem("allTasks") || '{}');
    allTasks[this.currentBoard.id] = this.boardTasks;
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
  }

  removeTask(id: number): void {
    this.boardTasks = this.boardTasks.filter(x => x.id != id);
    this.saveTasks();
  }

  open(content: TemplateRef<any>, size: string = "xl"): void {
    this.modalService.open(content, { 
      ariaLabelledBy: 'modal-basic-title', 
      size: size, 
      centered: true,
      scrollable: true,
      backdrop: 'static', // Prevents closing when clicking outside
      animation: true,
      windowClass: 'custom-modal-window'
    }).result.then(
      (result) => {
        this.closeResult.set(`Closed with: ${result}`);
      },
      (reason) => {
        this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
      },
    );
  }

  newTaskModal(content: TemplateRef<any>, size: string = "xl"): void {
    if(this.currentBoard.columns.length == 0) return;

    let task = new Task(0, '');
    let maxId = this.boardTasks.reduce((max, task) => Math.max(max, task.id), 0);
    task.id = maxId + 1;

    this.boardTasks.push(task);
    this.selectedTask = task;
    this.open(content, size)
  }

  openTaskModal(content: TemplateRef<any>, task: Task, size: string = "xl"): void {
    if(this.currentBoard.columns.length == 0) return;
    this.selectedTask = task;
    this.open(content, size);
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }



  auth = inject(AuthService);
  router = inject(Router);
  
  async logout() {
    try {
      await this.auth.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle any errors (could show a notification)
    }
  }
}