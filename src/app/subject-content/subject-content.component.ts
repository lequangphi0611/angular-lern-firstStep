import { Component, OnInit } from "@angular/core";
import { SubjectService } from "../subject.service";
import { Subject } from '../../model/Subject';

@Component({
  selector: "app-subject-content",
  templateUrl: "./subject-content.component.html",
  styleUrls: ["./subject-content.component.css"],
})
export class SubjectContentComponent implements OnInit {

  subjects: Subject[] = [];

  elementNumberInPage:number = 4;

  start:number = 0;
  end:number = this.elementNumberInPage + this.start;

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.fetchSubject((data: Subject[]) => {
      this.subjects = data;
    });
  }

  fetchSubject(callback): void {
    setTimeout(() => {
      this.subjectService.getSubjects((data:Subject[]) => callback(data));
    });
  }

  hasNext():boolean {
    return (this.end + this.elementNumberInPage) <= this.subjects.length;
  }

  hasPrev():boolean {
    return this.start - this.elementNumberInPage >= 0;
  }

  next():void {
    setTimeout(() => {
      let next:boolean = this.hasNext();
      let endStep = this.elementNumberInPage;

      if(!next) {
        if(this.subjects.length - this.end < 0) {
          return;
        }

        if((this.start + this.elementNumberInPage) >= this.subjects.length) {
          return;
        }

        endStep = this.subjects.length - (this.start + this.elementNumberInPage);
      }

      this.start += this.elementNumberInPage;
      this.end += endStep;
    }, 0)
  }

  prev():void {
    setTimeout(() => {
      if(this.hasPrev()) {
        if(this.end - this.start < this.elementNumberInPage ) {
          this.end -= this.end - this.start;
          this.start = this.end - this.elementNumberInPage;
          return;
        }

        this.start -= this.elementNumberInPage,
        this.end -= this.elementNumberInPage
      }
    }, 0);
  }
}
