import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-alert-home-name',
  templateUrl: './alert-home-name.component.html',
  styleUrls: ['./alert-home-name.component.scss']
})
export class AlertHomeNameComponent implements OnInit {

  name: string
  constructor() {
    this.name = 'desconocido'
  }

  ngOnInit(): void {
  }

}
