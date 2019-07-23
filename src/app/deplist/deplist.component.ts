import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deplist',
  template: `
    <ul>
    <li  (click)="onSelect(depatment)"*ngFor="let depatment of departmens"> 
      <span>{{depatment.id}} </span> {{depatment.name}}
   </li>
</ul>
dep name is {{name}}
  `,
  styles: []
})
export class DeplistComponent implements OnInit {

  constructor(private router:Router) { }
  public name = ""
  public departmens = [
    {"id":"1","name":"odc1"},
    {"id":"2","name":"odc2"},
    {"id":"3","name":"odc3"}
  ]

  ngOnInit() {
  }

  onSelect(department) {
    this.router.navigate(["departments",department.id])
  }

}
