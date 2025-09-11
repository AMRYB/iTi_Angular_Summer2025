import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  @Output() studentAdded = new EventEmitter<Student>();
  
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  get name() {
    return this.studentForm.get('name');
  }

  get age() {
    return this.studentForm.get('age');
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const student: Student = {
        id: Date.now(),
        name: this.studentForm.value.name,
        age: this.studentForm.value.age
      };
      
      this.studentAdded.emit(student);
      this.studentForm.reset();
    }
  }
}