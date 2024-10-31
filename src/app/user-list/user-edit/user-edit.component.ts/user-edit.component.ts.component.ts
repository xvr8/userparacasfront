import { Component, Input, Output, EventEmitter, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../entities/user.entity';
import { UserServiceService } from '../../../services/user-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-edit.component.ts.component.html',
  styleUrls: ['./user-edit.component.ts.component.css'],
})
export class UserEditComponent implements OnInit {
  @Input() user: User | null = null; // Usuario a editar
  @Output() userUpdated = new EventEmitter<User>(); // Evento para notificar cuando se actualiza el usuario
  editForm: FormGroup;

  constructor(@Inject(UserServiceService) private userService: UserServiceService, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    if (this.user) {
      this.editForm.patchValue({
        name: this.user.name,
        email: this.user.email,
      });
    }
  }

  saveChanges() {
    if (this.editForm.valid && this.user) {
      const updatedUser: User = {
        ...this.user,
        ...this.editForm.value
      };

      this.userService.updateUser(this.user!.id, updatedUser).subscribe(
        () => {
          this.userUpdated.emit(updatedUser);
          alert('Usuario actualizado con éxito');
        },
        (err: any) => {
          console.error('Error al actualizar el usuario', err);
        }
      );
    }
  }
}
