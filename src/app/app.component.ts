import {Component, HostListener, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {ServiceServicehidenav} from "./service.servicehidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'esteban_guerra_webApp';
  scrollGo: Array<{
    name: string;
    tab: string
  }>
  mediaCambio = false;

  constructor(public matcher: MediaMatcher, public service: ServiceServicehidenav) {
    this.scrollGo = [
      {name: 'aboutMe',tab:'About Me'},
      {name: 'proyects',tab: 'My proyects'},
      {name: 'curriculum',tab:'Curriculum'},
      {name :'contactMe',tab:'Contact me'}]


  }
  ngOnInit(): void {
    this.service.setNavBarHidden(false)
    console.log(this.service.navBarHidden())
    const media = this.matcher.matchMedia('(max-width: 650px)')
    this.mediaCambio = media.matches;


  }
  @HostListener('window:resize', ['event'])
  onResize(event: any){
    const media = this.matcher.matchMedia('(max-width: 650px)')
    this.mediaCambio = media.matches;
  }

  scroll(id: string){
    let prueba = document.getElementById(id);
    prueba!.scrollIntoView({ behavior: "smooth", block: "start"});

  }

}
