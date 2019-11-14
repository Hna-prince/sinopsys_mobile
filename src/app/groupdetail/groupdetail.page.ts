import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-groupdetail',
  templateUrl: './groupdetail.page.html',
  styleUrls: ['./groupdetail.page.scss'],
})
export class GroupdetailPage implements OnInit {
  group;
  constructor(public route: ActivatedRoute) {
   /*this.route.queryParams.subscribe(params => {
    if (params && params.special) {
      console.log(params.special);
      this.group = JSON.parse(params.special);
    }
  });*/
  }
  ngOnInit() {
  }
 
}
