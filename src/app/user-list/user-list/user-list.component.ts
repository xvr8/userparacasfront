import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../entities/user.entity';
import { UserEditComponent } from '../user-edit/user-edit.component.ts/user-edit.component.ts.component';
import { UserCreateComponent } from '../user-create/user-create.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,UserEditComponent,UserCreateComponent], // Añade CommonModule aquí
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  userToEdit: User | null = null;

  constructor(private userService: UserServiceService) { }  //inyeccion de dependencias leer

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(     //rxjs INVESTIGAR         //unit test     //
      res => {
        this.users = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  editUser(user: User) {
    this.userToEdit = user;
  }

  onUserUpdated(user: User) {
    this.users = this.users.map(u => 
      u.id === user.id ? user : u
    );
    this.userToEdit = null;
    console.log('Usuario actualizado con exito');
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete it?')) {
      this.userService.deleteUser(id.toString()).subscribe(
      () => {
        this.users = this.users.filter(user => user.id !== id);
        console.log('User deleted');
        },
        err => {
          console.error('error deleting user', err);
        }
      );
    }
}
}

