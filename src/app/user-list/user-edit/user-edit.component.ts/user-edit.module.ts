import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './user-edit.component.ts.component';

@NgModule({
    imports: [UserEditComponent, CommonModule, ReactiveFormsModule], // Importa el componente y otros módulos necesarios
    
    exports: [UserEditComponent] // Exporta el componente para poder usarlo en otros módulos
  })
  export class UserEditModule { }