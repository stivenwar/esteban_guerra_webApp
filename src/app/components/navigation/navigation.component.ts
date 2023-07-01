import { MediaMatcher } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  shouldRun: any;
  mediaCambio = false;
  activeLink: string;
  constructor(public matcher: MediaMatcher) {
    this.activeLink = '';
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
