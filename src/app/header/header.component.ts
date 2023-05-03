import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() logo: string='';
  @Input() user: any;
  @Output() event = new EventEmitter<void>();

  onLogoClick(): void {
    this.event.emit();
  }

}
