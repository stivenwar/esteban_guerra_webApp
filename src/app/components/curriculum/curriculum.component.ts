import { Component, OnInit } from '@angular/core';
import {CvInterface} from "../../interfaces/cv-interface";
import * as info from "../../../assets/json/info.json"
import {Observable} from "rxjs";

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  textInfo: CvInterface["buttonOpenInfo"] | undefined
  buttonInfo: number
  buttonsToInfo: CvInterface[]
  data: any
  titleFromButton: string
  constructor() {
    this.data = info
    this.buttonsToInfo = this.data.info
    this.buttonInfo = 0
    this.titleFromButton = ''
  }

  ngOnInit(): void {

  }


  getInfoButton(buttonNumber: number) {
    console.log(this.textInfo)
    this.buttonInfo = buttonNumber;
    this.textInfo = this.buttonsToInfo[this.buttonInfo].buttonOpenInfo;
    console.log(this.textInfo);
    this.titleFromButton = this.buttonsToInfo[buttonNumber].title;


  }
}
