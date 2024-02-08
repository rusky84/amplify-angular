import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Input() sideNavVisible: boolean = false;
  @Input() navBarTitle: string | undefined;

  @Output() MenuButtonToggle = new EventEmitter();
  menuButtonToggle(){
    this.MenuButtonToggle.emit();
  }

  @Output() ToolbarButtonClick = new EventEmitter();
  toolbarButtonClick(){
    this.ToolbarButtonClick.emit();
  }


  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  signOut(){
    Auth.signOut();
  }

}
