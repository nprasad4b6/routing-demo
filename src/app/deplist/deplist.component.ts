import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-deplist',
  template: `

    <ul>
    <li  (click)="onSelect(department)" [class.selected]="isSelected(department)"  *ngFor="let department of departmens"> 
      <span>{{department.id}} </span> {{department.name}}
   </li>
</ul>
dep name is {{name}}
  `,
  styles: []
})
export class DeplistComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  public name = '';
  public selectedID: number;

  public departmens = [
    { id: '1', name: 'odc1' },
    { id: '2', name: 'odc2' },
    { id: '3', name: 'odc3' }
  ];

  ngOnInit() {
    // **** *np*/ to select values from url..will do like below
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.selectedID = id;
     });
  }

  onSelect(department) {
    // this.router.navigate(['departments', department.id]);
    // ** *np* for current url it appends id
    this.router.navigate([department.id], {relativeTo: this.route} );
  }

  isSelected(departement) {
      return departement.id === this.selectedID;
  }
}
