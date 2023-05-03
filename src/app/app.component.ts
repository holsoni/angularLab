import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'LAB 1+2';
  userName='Olexandr';
  greeting = false;
  list = true;

  onLogoClick(){
    this.greeting = !this.greeting;
  }

  menuItems=[{label: 'Main page', active: false},
    {label: 'Films', active: false},
    {label: 'Series', active: false},
    {label: 'Clips', active: false},
  ]
  onMenuClick(label: string) {
    console.log("MAIN ", label);
    // Update active value of menu item
    this.menuItems.forEach(item => {
      item.active = item.label === label;
      console.log(item);
    });
  }
  data = [
    {
      type: 'type1',
      title: 'Item 1',
      subtitle: 'This is the subtitle for item 1',
      image: 'https://via.placeholder.com/150',
      rating: 4.5,
      createdDate: '2023-05-04',
      display: true
    },

    {
      type: 'type2',
      title: 'Item 4',
      subtitle: 'This is the subtitle for item 4',
      image: 'https://via.placeholder.com/150',
      rating: 4.5,
      createdDate: '2023-05-04',
      display: true
    },
    {
      type: 'type1',
      title: 'Item 5',
      subtitle: 'This is the subtitle for item 5',
      image: 'https://via.placeholder.com/150',
      rating: 4.5,
      createdDate: '2023-05-04',
      display: true
    },

    // Add additional items as needed
  ];


  toggleDisplay() {
    this.list = !this.list;
  }

}
