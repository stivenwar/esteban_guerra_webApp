import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  textInfo1: string = ""
  textInfo2: string = ""
  textInfo3: string = ""
  constructor() { }

  ngOnInit(): void {
    this.textInfo1 = "Desarrollador de Software con experiencia en el desarrollo de aplicaciones web y móviles."
    this.textInfo2 =  " Mi enfoque está en crear aplicaciones que satisfacen necesidades de los usuarios y me motiva el aprendizaje constante en tecnología y herramientas actuales."
    this.textInfo3 = "Me considero autodidacta, organizado y orientado a resultados."
  }

}
