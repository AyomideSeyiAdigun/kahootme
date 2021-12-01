import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( public router:Router) { }

  public checkModal:any=""
  public modalHead=""
  ngOnInit(): void {
  }
  checkWhoCallTheModalBox (value:any ){
    if ( value == 'JambQuestion'){
      this.checkModal = value
      this.modalHead = 'What is JambQuestion?'
    }
    else if (value == 'HowItWorks'){
      this.checkModal = value
      this.modalHead='How does JQ works?'
    }
    else if (value == 'Home'){
      this.checkModal = value
      this.modalHead ='How can JQ be useful at home?'
    }
    else if (value =='Work'){
      this.checkModal=value
      this.modalHead ='How can JQ be useful at work?'
    }
    else if (value =='School'){
      this.checkModal=value
      this.modalHead ='How can JQ be useful at school?'
    }
  }
}
