import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dep-details',
  template: `
  <h2>U selected departmentId-- {{departmentId}} </h2>
 
  <a (click)="goPrevious()" >Previous</a>
  <a (click)="goNext()">Next</a>
  `,
  styles: [``]
})
export class DepDetailsComponent implements OnInit {
  public departmentId:number;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  //  let id = parseInt(this.route.snapshot.paramMap.get("id"));
  this.route.paramMap.subscribe((params:ParamMap)=> {
    let id = parseInt(params.get("id"))
    this.departmentId = id;
   })
  
  }

  goPrevious() {
    let id = this.departmentId -1;
    this.router.navigate(["departments",id])
  } 
  goNext() {
    let id = this.departmentId + 1;
    this.router.navigate(["departments",id])
  }

}
