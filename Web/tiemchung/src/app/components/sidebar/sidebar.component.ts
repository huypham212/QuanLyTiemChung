import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/user', title: 'Quản lý người dùng', icon: 'ni-planet text-blue', class: '' },
  { path: '/vaccine', title: 'Quản lý vaccine', icon: 'ni-pin-3 text-orange', class: '' },
  { path: '/location', title: 'Quản lý địa điểm tiêm', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/registration', title: 'Quản lý đăng ký tiêm', icon: 'ni-key-25 text-info', class: '' },
  { path: '/histories', title: 'Quản lý lịch sử tiêm', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/plan', title: 'Quản lý kế hoạch tiêm', icon: 'ni-key-25 text-info', class: '' },
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
