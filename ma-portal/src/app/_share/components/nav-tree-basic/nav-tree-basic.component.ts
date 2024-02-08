import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { files } from './example-data';

/** File node data with possible child nodes. */
export interface NavNode {
  name: string;
  icon: string;
  routerLink: string[];
}


@Component({
  selector: 'app-nav-tree-basic',
  templateUrl: './nav-tree-basic.component.html',
  styleUrls: ['./nav-tree-basic.component.scss']
})
export class NavTreeBasicComponent {


  @Output() MenuItemSelected = new EventEmitter<any>();
  menuItemSelected(value: any) {
    this.MenuItemSelected.emit(value);
  }

  dataSource: any = [
    {
      name: 'Home',
      icon: 'home',
      routerLink: 'home' 
    },
    {
      name: 'Warehouse Action',
      icon: 'diamond',
      routerLink: 'wa' 
    }
  ];

  constructor(private router: Router) {

  }

 
}
