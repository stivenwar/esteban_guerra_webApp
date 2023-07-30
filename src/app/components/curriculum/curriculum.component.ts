import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {CvInterface} from "../../interfaces/cv-interface";
import * as info from "../../../assets/json/info.json"
import { MediaMatcher } from '@angular/cdk/layout';
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  textInfo: CvInterface[]
  buttonInfo: number
  buttonsToInfo: CvInterface[]
  data: any
  titleFromButton: string
  mediaCambio: boolean| undefined
  panelOpenState: boolean;
  constructor(private matcher: MediaMatcher) {
    this.data = info
    this.textInfo = []
    this.buttonsToInfo = this.data.info
    this.buttonInfo = 0
    this.titleFromButton = ''
    this.panelOpenState = false
  }

  ngOnInit(): void {

    this.buttonsToInfo.forEach(e => this.textInfo.push(e))
    console.log(this.textInfo)
    const media = this.matcher.matchMedia('(max-width: 650px)')
    this.mediaCambio = media.matches;


  }
  @HostListener('window:resize', ['event'])
  onResize(event: any){
    const media = this.matcher.matchMedia('(max-width: 650px)')
    this.mediaCambio = media.matches;
  }


  getInfoButton(buttonNumber: number) {
    // console.log(this.textInfo)
    // this.buttonInfo = buttonNumber;
    // this.textInfo = this.buttonsToInfo[this.buttonInfo].buttonOpenInfo;
    // console.log(this.textInfo);
    // this.titleFromButton = this.buttonsToInfo[buttonNumber].title;


  }

  protected readonly event = event;

  panelEvent(event: number) {
    console.log(event)
  }
}
