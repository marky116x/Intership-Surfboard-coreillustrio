import { Component, Input, OnInit, output } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';
import { Task } from '../../models/task.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faPencil, faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-board',
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, FormsModule],
  template: `
  <!-- Header -->
  <div class="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-purple-100 to-blue-100">
    <h4 class="text-lg font-bold">Edit Board</h4>
    <button 
      type="button" 
      class="text-gray-500 hover:text-gray-700 transition-colors" 
      aria-label="Close" 
      (click)="close.emit()">
      <fa-icon [icon]="faClose"></fa-icon>
    </button>
  </div>
  
  <!-- Body -->
  <div class="p-5 bg-white">
    <!-- Board Name -->
    <div class="mb-5">
      <label for="board-name" class="block font-semibold text-gray-700 mb-2">Board Name:</label>
      <input 
        id="board-name"
        type="text" 
        name="name" 
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
        [(ngModel)]="board.name" 
        placeholder="Enter board name"
        required />
    </div>
  
    <!-- Description -->
    <div class="mb-5">
      <label for="board-description" class="block font-semibold text-gray-700 mb-2">Description:</label>
      <textarea 
        id="board-description"
        name="description" 
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px]" 
        [(ngModel)]="board.description"
        placeholder="Enter board description"></textarea>
    </div>
  
    <!-- Columns -->
    <div class="mb-5">
      <label class="block font-semibold text-gray-700 mb-3">Columns</label>
      <div class="space-y-3">
        @for (col of board.columns; track $index; let i = $index) {
          <div class="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border border-gray-200">
            <input 
              type="text" 
              class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
              placeholder="Column Title" 
              [(ngModel)]="col.name" />
            <button 
              type="button" 
              class="px-3 py-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-md flex items-center gap-2 transition-colors" 
              (click)="removeColumn(i)"
              aria-label="Remove column">
              <fa-icon [icon]="faTrash"></fa-icon> 
              <span>Remove</span>
            </button>
          </div>
        }
      </div>
    </div>
  
    <!-- Add Column Button -->
    <button 
      type="button" 
      class="mt-2 px-4 py-2 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-md flex items-center gap-2 transition-colors" 
      (click)="addColumn()">
      <fa-icon [icon]="faPlus"></fa-icon> 
      <span>Add column</span>
    </button>
  </div>
  
  <!-- Footer -->
  <div class="flex justify-end p-4 gap-3 border-t border-gray-200 bg-gray-50">
    <button 
      type="submit" 
      class="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-md flex items-center gap-2 transition-colors" 
      (click)="submitForm()">
      <fa-icon [icon]="faSave"></fa-icon> 
      <span>Save</span>
    </button>
  </div>
  `,
})
export class EditBoardComponent implements OnInit {
  @Input() public board: Board = new Board(1, '', []);
  public close = output<void>();

  public faTrash = faTrash;
  public faPlus = faPlus;
  public faSave = faSave;
  public faClose = faClose;

  constructor() {}

  ngOnInit(): void {}

  addColumn(): void {
    this.board.columns.push(new Column(''));
  }

  removeColumn(index: number): void {
    this.board.columns.splice(index, 1);
  }

  submitForm(): void {
    localStorage.setItem("board", JSON.stringify(this.board));
    this.close.emit();
  }
}