import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from '../model/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  URL: string = "assets/db/Subjects.js";

  constructor(private http: HttpClient) {
  }

   getSubjects(callback) {
      return this.http.get(this.URL).subscribe((data:Subject[]) => callback(data))};

}
