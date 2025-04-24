import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center pt-12 px-4">
      <div class="max-w-md w-full bg-[#1f1f1f] rounded-2xl p-6 shadow-xl">
        <div class="flex flex-col items-center">
          <img 
            src="_ (7).jpeg" 
            alt="Profile" 
            class="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <h2 class="text-2xl font-semibold mt-4">Marky </h2>
       
        </div>

        <div class="mt-6 space-y-4">
          <div class="bg-[#2c2c2e] p-4 rounded-lg flex justify-between items-center">
            <span class="text-gray-300">Email</span>
            <span class="font-medium">markdisney.com</span>
          </div>
          <div class="bg-[#2c2c2e] p-4 rounded-lg flex justify-between items-center">
            <span class="text-gray-300">Subscription</span>
            <span class="font-medium text-green-400">Premium</span>
          </div>
          <div class="bg-[#2c2c2e] p-4 rounded-lg flex justify-between items-center">
            <span class="text-gray-300">Plan Renewal</span>
            <span class="font-medium">May 25, 2025</span>
          </div>
        </div>

        <div class="mt-8 flex justify-center">
          <button (click)="logout()"
            routerLink="/login"
            class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-semibold transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileComponent {

  authService = inject(AuthService);
  router = inject(Router);

  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
}
