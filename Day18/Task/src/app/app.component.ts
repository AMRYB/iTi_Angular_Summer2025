import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { User, UserForm } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[] = [];
 
  formModel: UserForm = this.getEmptyUser();
  isEdit = false;

  private getEmptyUser(): UserForm {
    return { id: 0, name: '', age: null, track: '', email: '' };
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    const ageNumber = Number(this.formModel.age);
    if (!Number.isFinite(ageNumber)) return;
    const userPayload: User = { ...this.formModel, age: ageNumber } as User;

    if (this.isEdit) {
      const idx = this.users.findIndex(u => u.id === this.formModel.id);
      if (idx !== -1) this.users[idx] = { ...userPayload };
    } else {
      const nextId = this.users.length ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
      this.users.push({ ...userPayload, id: nextId });
    }
    this.reset(form);
  }

  edit(user: User) {
    this.formModel = { ...user, age: user.age };
    this.isEdit = true;
  }

  delete(user: User) {
    this.users = this.users.filter(u => u.id !== user.id);
    if (this.isEdit && this.formModel.id === user.id) {
      this.isEdit = false;
      this.formModel = this.getEmptyUser();
    }
  }

  reset(form?: NgForm) {
    this.isEdit = false;
    this.formModel = this.getEmptyUser();
    form?.resetForm();
  }
}
