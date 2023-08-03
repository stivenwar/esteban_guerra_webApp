import {AfterContentInit, AfterViewChecked, Component, OnInit} from '@angular/core';
import {ServiceService} from "../../../service.service";

@Component({
  selector: 'app-ionic-app',
  templateUrl: './ionic-app.component.html',
  styleUrls: ['./ionic-app.component.scss']
})
export class IonicAppComponent implements OnInit {

  constructor(public  service:ServiceService) { }

  ngOnInit(): void {
  setTimeout(()=> {
    this.service.setNavBarHidden(true)
    console.log(this.service.navBarHidden())
  })
  }

}
