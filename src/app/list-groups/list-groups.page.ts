import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.page.html',
  styleUrls: ['./list-groups.page.scss'],
})
export class ListGroupsPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  showGroupDetail(){
    this.router.navigateByUrl('/groupdetail');
    //  this.router.navigate(['/product-details', id]);
    //receive
    /*import { ActivatedRoute } from '@angular/router';
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
 });*/
  }

}
