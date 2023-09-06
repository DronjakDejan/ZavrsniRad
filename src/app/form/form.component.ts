import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email === 'example@gmail.com' && this.password === '1234') {
      alert('Uspešno ste se prijavili!');
      this.email = '' ;
      this.password = ''
    } else {
      alert('Pogrešan email ili lozinka.') ;
      this.email = '' ;
      this.password = '' ;
    }
  }
}
