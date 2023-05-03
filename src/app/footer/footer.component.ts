import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() menuItems:any[]=[];
  @Output() event= new EventEmitter();

  onMenuClick(item: any) {
    console.log(item);
    this.event.emit(item);
  }
}
