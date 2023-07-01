import {Component, HostListener} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";

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
  constructor(public matcher: MediaMatcher) {
    this.activeLink = '';
    this.scrollGo = [
      {name: 'proyects',tab: 'My proyects'},
      {name: 'aboutMe',tab:'Abbout Me'},
      {name: 'curriculum',tab:'Curriculum'},
      {name :'contactMe',tab:'Contact me'}]


  }
  ngOnInit(): void {
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
    console.log(prueba);
    prueba!.scrollIntoView({ behavior: "smooth", block: "start"});

  }


  goToTop() {
    window.scrollTo(0,0);
  }
}
