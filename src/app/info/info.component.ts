import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  user:any = [];
  id:any = 0;

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    let id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem("users")).find(users => users.id == id);
    localStorage.clear();
  }
}
