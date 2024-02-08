import { Component, Input, OnInit } from '@angular/core';
import { FileNode } from '../../models/file-node';

@Component({
  selector: 'app-nav-tree-custom',
  templateUrl: './nav-tree-custom.component.html' 
})
export class NavTreeCustomComponent {
  @Input('DataSource') dataSource: FileNode[];
}
