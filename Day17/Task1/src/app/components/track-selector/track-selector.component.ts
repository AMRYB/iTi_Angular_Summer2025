import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-track-selector',
  templateUrl: './track-selector.component.html',
  styleUrls: ['./track-selector.component.css']
})
export class TrackSelectorComponent {
  @Output() trackSelected = new EventEmitter<string>();
  
  selectedTrack = '';
  
  tracks = {
    'DotNet': 'Smart, Minia',
    'Mearn': 'Smart, Minia', 
    'Testing': 'Smart, Cairo',
    'Social Media': 'Cairo, Alexandria'
  };

  onTrackChange(event: any) {
    this.selectedTrack = event.target.value;
    this.trackSelected.emit(this.selectedTrack);
  }

  getTrackAvailability(): string {
    return this.tracks[this.selectedTrack as keyof typeof this.tracks] || '';
  }
}