import {Component, HostListener, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {faAngular,faPhp,faNode} from "@fortawesome/free-brands-svg-icons";
import {faCircleNotch,faDatabase} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faDatabase,faNode,faPhp,faAngular,faCircleNotch)

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  cols: number
  sizesScreen: Array<string>

  faAngular = faAngular
  faPhp = faPhp
  faNode = faNode
  faCircleNotch = faCircleNotch
  faDatabase = faDatabase


  constructor(public matcher: MediaMatcher) {
    this.cols = 1
    this.sizesScreen = ['(max-width: 1999px)','(max-width: 999px)','(max-width: 599px)']
  }

  @HostListener('window:resize', ['event'])
  onResize(event: any){
    this.mediaScreenProyects();

  }
  ngOnInit(): void {
    this.mediaScreenProyects();
  }

  mediaScreenProyects(){
    let  media = this.matcher.matchMedia('(max-width: 599px)')
    if (media.matches){
      this.cols = 1
    }else {
      media = this.matcher.matchMedia('(max-width: 999px)');
      if (media.matches){
        this.cols = 2
      }else {
        this.cols = 3
      }
    }
  }

}
