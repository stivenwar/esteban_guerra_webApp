import {Component, HostListener} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {ServiceService} from "./service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esteban_guerra_webApp';
  scrollGo: Array<{
    name: string;
    tab: string
  }>
  mediaCambio = false;
  activeLink: string;
  constructor(public matcher: MediaMatcher,public service : ServiceService) {
    this.activeLink = '';
    this.scrollGo = [
      {name: 'proyects',tab: 'My proyects'},
      {name: 'aboutMe',tab:'Abbout Me'},
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
    this.activeLink = id;
    let prueba = document.getElementById(id);
    prueba!.scrollIntoView({ behavior: "smooth", block: "start"});

  }

}
