import { Component, HostListener, OnInit } from '@angular/core';
import {CvInterface} from "../../interfaces/cv-interface";
import * as info from "../../../assets/json/info.json"
import {Observable} from "rxjs";
import { MediaMatcher } from '@angular/cdk/layout';
import { log } from 'console';

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
  mediaCambio: boolean| undefined
  constructor(private matcher: MediaMatcher) {
    this.data = info
    this.buttonsToInfo = this.data.info
    this.buttonInfo = 0
    this.titleFromButton = ''
  }

  ngOnInit(): void {

    const media = this.matcher.matchMedia('(max-width: 650px)')
    console.log(media)
    this.mediaCambio = media.matches;
  
    
  }
  @HostListener('window:resize', ['event'])
  onResize(event: any){
    const media = this.matcher.matchMedia('(max-width: 650px)')
    console.log(media.matches);
    this.mediaCambio = media.matches;
  }


  getInfoButton(buttonNumber: number) {
    console.log(this.textInfo)
    this.buttonInfo = buttonNumber;
    this.textInfo = this.buttonsToInfo[this.buttonInfo].buttonOpenInfo;
    console.log(this.textInfo);
    this.titleFromButton = this.buttonsToInfo[buttonNumber].title;


  }
}
