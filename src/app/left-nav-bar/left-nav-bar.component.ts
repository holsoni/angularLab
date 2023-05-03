import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent {

  @Input() menuItems:any[]=[];
  @Output() event= new EventEmitter();

  onMenuClick(item: any) {
    console.log(item);
    this.event.emit(item);
  }
}
