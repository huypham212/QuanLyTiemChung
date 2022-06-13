import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni ni-tv-2 text-primary', class: '' },
  { path: '/user', title: 'Quản lý người dùng', icon: 'ni ni-single-02 text-yellow', class: '' },
  { path: '/vaccine', title: 'Quản lý vaccine', icon: 'fas fa-syringe text-green', class: '' },
  { path: '/location', title: 'Quản lý địa điểm tiêm', icon: 'ni ni-pin-3 text-orange', class: '' },
  { path: '/plan', title: 'Quản lý kế hoạch tiêm', icon: 'ni ni-collection text-info', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

}
