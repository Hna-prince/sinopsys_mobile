import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router) {
    this.getStorageInformation();
  }
  Classroom;
  subject;

  ngOnInit() {
   
  }
  toDrawpage(){
    this.router.navigateByUrl('/draw');
  }

  toGroupCreationPage(){
    this.router.navigateByUrl('/groupcreation');
  }

  toGroupListPage(){
    this.router.navigateByUrl('/list-groups');

  }

  /*async getStorageInformation(){
    await this.storage.get('idclassroom').then( (val) => {
 
      console.log("ça ira"+val);
      });

   await this.storage.get('classroom').then( (val) => {
    Classroom =val; 
    console.log(val);
    });
    
 
  await     this.storage.get('subject').then( (val) => {
    subject=val;
    console.log(val);
  });
  }*/
  async getStorageInformation(){
    this.Classroom= JSON.parse(  localStorage.getItem('classroom') );
    this.subject= JSON.parse(  localStorage.getItem('subject') );
   
   /*await this.storage.get('classroom').then( (val) => {
    Classroom =val; 
    console.log(val);
    });
  await     this.storage.get('subject').then( (val) => {
    subject=val;
    console.log(val);
  });*/
}
}
