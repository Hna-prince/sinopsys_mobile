import { Component, OnInit  } from '@angular/core';


import { AlertController } from '@ionic/angular';
import {IonContent} from '@Ionic/angular';


import { ApiService } from '../service/api.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-groupcreation',
  templateUrl: './groupcreation.page.html',
  styleUrls: ['./groupcreation.page.scss'],
})
export class GroupcreationPage implements OnInit {
  
  constructor(private alertCtrl: AlertController,  private apiService: ApiService, private router: Router) {
    this.type=0;
    this.studentNumberChoosed = 0;
   }
  type;
  GroupList;
  elementId = 'groupList';
  studentNumberChoosed;
  ngOnInit() {
  }

  getStudentGrouped(elementId: string){
    //this.scrollTo();
    const classroom= JSON.parse(  localStorage.getItem('classroom') );
    this.apiService.groupStudents(this.studentNumberChoosed, classroom.IDCLASSROOM).subscribe((data)=>{
      console.log(data['data']);
      this.GroupList =data['data'];  
      //this.studentListChosen = data['data'];
    });
  }

 /*  getContent() {
    return document.querySelector('ion-content');
  }

  scrollTo() {
    let y = document.getElementById(this.elementId).offsetTop;
    console.log(" y "+y);
    this.getContent().scrollToPoint(0, y);
}*/

  chooseNumberStudentPerGroup(studentNumber){
    this.studentNumberChoosed = studentNumber;
  }

  detailGroup(group){
    this.router.navigateByUrl('/groupdetail');

    /*let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(group)
      }
    };*/

      //this.router.navigate(['/groupdetail',navigationExtras]);
   
  }

   async presentPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Entrez le nombre d\'élèves',
      inputs: [
        {
          name: 'studentNumberInput',
          placeholder: '7'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Terminé',
          handler: data => {
            this.studentNumberChoosed = data.studentNumberInput;
            console.log('terminé clicked');
          }
        }
      ]
    });
     await alert.present();
  }

}
