import { CommonModule, NgIf } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-leftsidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './leftsidebar.component.html',
  styleUrl: './leftsidebar.component.css'
})
export class LeftsidebarComponent {

  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink:'dashboard',
      icon: 'fas fa-home',
      label:'Dashboard',
    },
    {
      routeLink:'products',
      icon: 'fas fa-box-open',
      label:'Products',
    },
    {
      routeLink:'pages',
      icon: 'fas fa-file',
      label:'Pages',
    }
    , {
      routeLink:'settings',
      icon: 'fas fa-cog',
      label:'Settings',
    }
    
  ]
  toogleCollapsed() {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
  closedSidebar() {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
