import { Component, OnInit } from "@angular/core";
import { SubjectService } from "../subject.service";
import { Subject } from "../../model/Subject";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"],
})
export class SideBarComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.fetchSubject();
  }

  fetchSubject(): void {
    setTimeout(() => {
      this.subjectService.getSubjects((data: Subject[]) => this.subjects = data);
    }, 0);
  }
}
