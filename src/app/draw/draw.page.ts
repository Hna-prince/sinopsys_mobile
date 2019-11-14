import { Component, OnInit } from '@angular/core';


import { ActionSheetController } from '@ionic/angular';

import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-draw',
  templateUrl: './draw.page.html',
  styleUrls: ['./draw.page.scss'],
})
export class DrawPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, private apiService: ApiService){
    this.typedraw=0;
    this.resultNumber=1;
  }
  typedraw;
  resultNumber;
  studentListChosen;
  interrogationStateList;
  ngOnInit() {
  }


test() {
    console.log('User created!');
}

  startDraw(){
  if(this.typedraw === 1){
    const  classroom = JSON.parse(  localStorage.getItem('classroom') );
    this.apiService.  drawLots(this.typedraw, this.resultNumber, classroom.IDCLASSROOM).subscribe((data)=>{
      console.log(data['data']);
      this.studentListChosen = data['data'];
      console.log(" nombre etudiant "+this.studentListChosen.length);
      this.initTableStateInterrogation( this.studentListChosen.length);
      console.log( this.interrogationStateList);
    });
  }else{
    const  classroom = JSON.parse(  localStorage.getItem('classroom') );
    const  subject = JSON.parse(  localStorage.getItem('subject') );
    this.apiService.  drawLotsByPriority( this.resultNumber, classroom.IDCLASSROOM,subject.SUBJECTNAME).subscribe((data)=>{
      console.log(data['data']);
      this.studentListChosen = data['data'];
      console.log(" nombre etudiant priorités "+this.studentListChosen.length);
      this.initTableStateInterrogation( this.studentListChosen.length);
      console.log( this.interrogationStateList);
    });
  }
  }

  initTableStateInterrogation(studentListLenght){
    this.interrogationStateList=[];
    for(let i=0;i<studentListLenght;i++){
      this.interrogationStateList.push(2);
    }
  }

  falseAnswer(idStudent, index){
    
    const idsubject = JSON.parse(  localStorage.getItem('subject') ).IDSUBJECT;
      this.apiService.  updateStudentParticipation( idsubject, idStudent, 1).subscribe((data)=>{
       console.log(data['data']);
       //this.studentListChosen = data['data'];
       this.interrogationStateList[index]=1;
     });
    
  }
  trueAnswer(idStudent, index){
    
    const idsubject = JSON.parse(  localStorage.getItem('subject') ).IDSUBJECT;
      this.apiService.  updateStudentParticipation( idsubject, idStudent, 0).subscribe((data)=>{
       console.log(data['data']);
       //this.studentListChosen = data['data'];
       this.interrogationStateList[index]=0;
     });
     
  }

  async presentActionSheet(idStudent, index) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Réponse',
      buttons: [{
        text: 'Exacte',
        icon: 'checkmark',
        handler: () => {
          this.trueAnswer(idStudent, index);
          console.log('exacte clicked');
        }
      }, {
        text: 'Fausse',
        icon: 'close',
        handler: () => {
          this.falseAnswer(idStudent, index);
          console.log('fausse clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
