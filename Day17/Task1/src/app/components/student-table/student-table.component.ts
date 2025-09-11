import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  @Input() students: Student[] = [];
  @Output() deleteStudent = new EventEmitter<number>();

  onDeleteStudent(id: number) {
    this.deleteStudent.emit(id);
  }
}