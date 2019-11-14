import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { WebServiceParams } from '../models/webServiceParams.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends WebServiceParams {

  constructor(private httpClient: HttpClient) {
    super();
  }
  //start
   getClassroom(){
      const url = this.serverUrl + '/class/all';
      return this.httpClient.get(url);
    }

    getSubjectByClassroom(idClassroom){
      const url = this.serverUrl + '/subject/getListSubjectByIdClass/'+idClassroom;
      return this.httpClient.get(url);
    }


    //tirage

    drawLots(type, resultNumber, idClassroom){
      const url = this.serverUrl + '/students/getTirageByClassByHasardOrNot/idClassroom-'+idClassroom+'/nbStudents-'+resultNumber+'/type-'+ type;
      return this.httpClient.get(url);
    }

    drawLotsByPriority( resultNumber, idClassroom, subject){
      const url = this.serverUrl + '/statistique/tirageElevePriorite/'+subject+'/'+idClassroom+'/'+resultNumber;
      console.log(url);
      return this.httpClient.get(url);
    }
    updateStudentParticipation(idSubject, idStudent, type){
      const url = this.serverUrl + '/participation/updateParticipationByCase/idStudent-'+idStudent+'/idSubject-'+idSubject+'/type-'+type;
    console.log("URL")
      return this.httpClient.get(url);
    }
    //Groupage

    groupStudents( studentNumberPerGroup, idClassroom){
     
      const url = this.serverUrl + '/tirage/groupStudentsByRandom/'+studentNumberPerGroup+'/'+idClassroom;
      console.log("  group random "+url);
      return this.httpClient.get(url);
     // return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
    }
    //
}
