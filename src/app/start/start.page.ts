import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private apiService: ApiService, public storage : Storage, private router: Router) { 
   this. loadClassroomList();
  }
  classrooms;
  subjects;
  classSelected = false;

  classroom;
  subject;

  ngOnInit() {
  }

  
  loadClassroomList(){

    this.apiService.getClassroom().subscribe((data)=>{
     // console.log(data['data']);
      this.classrooms = data['data'];
     
    });
  }

  chooseClassroom(){
    this.classSelected = true;
   // console.log(' IDCLas '+this.classroom);

    this.apiService.getSubjectByClassroom(this.classroom.IDCLASSROOM).subscribe( (data) => {
        this.subjects = data['data'];
    });
  }

  

  async valid(){
    localStorage.setItem('classroom',JSON.stringify(this.classroom));
    localStorage.setItem('subject',JSON.stringify(this.subject));
  
/*
    this.storage.set('classroom', this.classroom );
 
   await this.storage.get('classroom').then( (val) => {
      console.log(val);
    });

    this.storage.set('subject', this.subject );
     
 await     this.storage.get('subject').then( (val) => {
      console.log(val);
    });*/
this.router.navigateByUrl('/home');
  }

}
