import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseFirestoreService } from '../services/firebase-firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('userEmail') userEmail!: ElementRef;
  @ViewChild('userName') userName!: ElementRef;
  @ViewChild('userPassword') userPassword!: ElementRef;
  @ViewChild('messageError') messageError!: ElementRef;

  constructor(
    private service: FirebaseFirestoreService,
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void { }

  validateEmail(event: any) {
    const emailCondition = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const stateCondition = emailCondition.test(event.target.value);
    if (!stateCondition) {
      this.messageError.nativeElement.innerHTML = 'Ingrese un email valido: ejemplo@ejemplo.com';
      this.renderer.setStyle(this.messageError.nativeElement, 'display', 'block');
      this.renderer.setStyle(this.messageError.nativeElement, 'background-color', '#F5F5F6');
      this.renderer.setStyle(this.userEmail.nativeElement, 'border', '2px solid #BC0000');
      
    } else {
      this.messageError.nativeElement.innerHTML = '';
      this.renderer.setStyle(this.messageError.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.userEmail.nativeElement, 'border', '0.5px solid #564E4E80');
    }
  }


    // MÉTODO PARA REGISTRAR USUARIO CON EMAIL Y CONSTRASEÑA
  registerWithEmailAndPassword() {
    const userEmail = this.userEmail.nativeElement.value;
    const userName = this.userName.nativeElement.value;
    const userPassword = this.userPassword.nativeElement.value;
    this.service.register(userEmail, userPassword)
      .then((response) => {
        console.log(response, 'RESPONSE');
      
      })
      .catch((error) => {
        console.log(error, 'ERROR');
      })
  }
  


}
