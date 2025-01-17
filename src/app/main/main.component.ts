import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
 isLeftSidebarCollapsed = input.required<Boolean>();
 screenWidth = input.required<number>();

 sizeClass = computed(() => {
  const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();
  if(isLeftSidebarCollapsed){
    return '';
  }
  return this.screenWidth() > 768? 'body-trimmed' : 'body-md-screen';
 })
}
