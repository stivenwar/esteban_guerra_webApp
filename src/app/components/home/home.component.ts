import {Component, OnInit, ViewChild} from '@angular/core';
import Typed  from 'typed.js'
import {MatDialog} from "@angular/material/dialog";
import {AboutMeComponent} from "../about-me/about-me.component";
import {AlertHomeNameComponent} from "./alert-home-name/alert-home-name.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  typed : Typed | any
  nameHome: string|any
  vez: string|any

  constructor(public dialog:MatDialog) {
    this.nameHome = localStorage.getItem('name_init')!= null && localStorage!= undefined ? localStorage.getItem('name_init'):'desconocido'
    this.vez = localStorage.getItem('once')!= null && localStorage!= undefined ? localStorage.getItem('once'):'0'


  }
  ngOnInit(): void {
      this.vez == '0' ? this.openDialog():this.myTyped();
  }

   myTyped(){
    this.typed = new Typed('#typed',{
      strings: ['<span>Hola </span>'+this.nameHome,'Bienvenido a mi Pagina Web de Angular'],
      typeSpeed: 100
    })
  }
    openDialog(): void {
      const dialogRef = this.dialog.open(AlertHomeNameComponent, {
        data: {name: this.nameHome},
      });

      dialogRef.afterClosed().subscribe(async result => {
        console.log(result)
        console.log('The dialog was closed')
        this.nameHome = result;
        localStorage.setItem('name_init',this.nameHome)
        localStorage.setItem('once','1')
        await this.myTyped()
      });
    }
}
