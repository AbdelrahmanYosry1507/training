import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//component directive
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  var1:boolean = true

//  name='Ahmed'
//  title="training"
//  img='https://picsum.photos/200/300'
//  binding="HEELOO"
links=['Home',"About", 'Contact Us']
 submit(){
  console.log("hi ")
  this.var1 =false
 }
name1:string ="Ali"
name2='Khloud'

}
