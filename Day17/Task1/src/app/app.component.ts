import { Component } from '@angular/core';
import { Student } from './models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tracks Of ITI';
  students: Student[] = [];
  selectedTrack = '';

  onStudentAdded(student: Student) {
    this.students.push(student);
  }

  onStudentDeleted(studentId: number) {
    this.students = this.students.filter(student => student.id !== studentId);
  }

  onTrackSelected(track: string) {
    this.selectedTrack = track;
  }
}