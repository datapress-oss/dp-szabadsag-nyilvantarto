import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faUndo, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-state-save',
  templateUrl: './state-save.component.html',
  styleUrls: ['./state-save.component.scss']
})
export class StateSaveComponent implements OnInit {
  faUndo = faUndo;
  faSave = faSave;
  @Output() saveEvent = new EventEmitter<void>();
  @Output() discardEvent = new EventEmitter<void>();

  onSave(): void {
    this.saveEvent.emit();
  }

  onDiscard(): void {
    this.discardEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
