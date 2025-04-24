import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, updateDoc, deleteDoc, doc, query, where } from '@angular/fire/firestore';
import { Observable, switchMap, of } from 'rxjs';
import { AuthService } from './auth.service';

export interface Todo {
  id?: string;
  text: string;
  completed: boolean;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  getTodos(): Observable<Todo[]> {
    return this.authService.user$.pipe(
      switchMap(user => {
        if (!user) {
          return of([]);
        }
        
        const todosCollection = collection(this.firestore, 'todos');
        const todosQuery = query(todosCollection, where('userId', '==', user.uid));
        return collectionData(todosQuery, { idField: 'id' }) as Observable<Todo[]>;
      })
    );
  }

  addTodo(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.authService.user$.subscribe({
        next: async (user) => {
          if (!user) {
            reject('User not authenticated');
            return;
          }

          const todosCollection = collection(this.firestore, 'todos');
          await addDoc(todosCollection, {
            text,
            completed: false,
            userId: user.uid
          });
          resolve();
        },
        error: (error) => reject(error)
      });
    });
  }

  async updateTodo(id: string, completed: boolean) {
    const todoRef = doc(this.firestore, 'todos', id);
    await updateDoc(todoRef, { completed });
  }

  async deleteTodo(id: string) {
    const todoRef = doc(this.firestore, 'todos', id);
    await deleteDoc(todoRef);
  }
}