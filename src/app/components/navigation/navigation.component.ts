import { MediaMatcher } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  shouldRun: any;
  mediaCambio = false;

  constructor(public matcher: MediaMatcher) { }

  ngOnInit(): void {

    const media = this.matcher.matchMedia('(max-width: 650px)')
    this.mediaCambio = media.matches;


  }
  @HostListener('window:resize', ['event'])
  onResize(event: any){
    const media = this.matcher.matchMedia('(max-width: 650px)')
    console.log(media.matches);
    this.mediaCambio = media.matches;
  }


  scroll(event: any){
    console.log(event);
    /*let prueba = document.getElementById(id);
    prueba!.scrollIntoView({ behavior: "smooth", block: "start"});*/
  }
}
