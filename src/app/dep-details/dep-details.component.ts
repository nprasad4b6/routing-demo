import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dep-details',
  template: `

  <button (click)="goToContact()" >Contact</button>
  <button (click)="goToOverView()" >OverView</button>
  <router-outlet></router-outlet>

  <h2>U selected departmentId-- {{departmentId}} </h2>
  <button (click)="goPrevious()" >Previous</button>
  <button (click)="goNext()">Next</button>
  <br/>
  <br/>
  <button (click)="goToDepartments()">Back to Departments</button>
  `,
  styles: [``]
})
export class DepDetailsComponent implements OnInit {
  public departmentId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  //  let id = parseInt(this.route.snapshot.paramMap.get("id"));
  this.route.paramMap.subscribe((params: ParamMap) => {
    // tslint:disable-next-line:radix
    const id = parseInt(params.get('id'));
    this.departmentId = id;
   });
  }

  goPrevious() {
    const id = this.departmentId - 1;
    this.router.navigate(['departments', id] );
  }

  goNext() {
    const id = this.departmentId + 1;
    this.router.navigate(['departments', id] );
  }

  goToDepartments() {
    const selectedId = this.departmentId;
    // this.router.navigate(['departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route} );
  }

  goToContact() {
    this.router.navigate(['contact'], {relativeTo: this.route} );
  }

  goToOverView() {
    this.router.navigate(['overview'], {relativeTo: this.route} );
  }


}
