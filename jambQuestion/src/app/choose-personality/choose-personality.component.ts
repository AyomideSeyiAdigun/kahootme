import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-personality',
  templateUrl: './choose-personality.component.html',
  styleUrls: ['./choose-personality.component.css']
})
export class ChoosePersonalityComponent implements OnInit {
  
  constructor() { }
public show :string ="personality"
  ngOnInit(): void {
  }

  studentData(){
    this.show='student'
  }
  tutorData(){
    this.show='tutor'
  }
  professionalData(){
    this.show="professional"
  }
  familyData(){
    this.show='family'
  }

}
