import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  Touch: boolean = false;


  constructor() {

  }


  ngOnInit(){
    
  }

  insideClick() {
    this.Touch = true;
  }

  outsideClick(){
    this.Touch = false;
  }

}
