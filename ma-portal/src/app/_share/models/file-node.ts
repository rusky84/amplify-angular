import { RouterLink } from "@angular/router";

export interface FileNode {
    name: string;
    type: string;
    routerLink: any;
    children?: FileNode[];
    expanded?: boolean;
  }
  
