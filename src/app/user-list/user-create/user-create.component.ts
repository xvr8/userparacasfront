import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../entities/user.entity';


@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,UserCreateComponent],
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  @Output() userCreated = new EventEmitter<User>(); // Emite un evento cuando se crea el usuario
  createForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserServiceService) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  createUser() {
    if (this.createForm.valid) {
      const newUser: User = this.createForm.value;
      email: this.createForm.value.email;


      this.userService.createUser(newUser).subscribe(
        (user) => {
          console.log('Usuario creado', user);
          this.userCreated.emit(user); // Emite el usuario creado al componente padre
          this.createForm.reset();
          alert('Usuario creado con éxito');
        },
        (error) => {
          console.error('Error al crear usuario', error);
        }
      );
    }
  }
}
