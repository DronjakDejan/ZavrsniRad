import { Component,  } from '@angular/core';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'zavrsni-rad';
 
  showMenu: boolean = false;
  showForm: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  formUp() {
    this.showForm = !this.showForm
  }

  

 
  
  
 

  
  
}
