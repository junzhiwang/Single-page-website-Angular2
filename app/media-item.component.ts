import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();
  @Output() watch = new EventEmitter();
  onDelete() {
    this.delete.emit(this.mediaItem);
  }
  onWatch() {
  	this.watch.emit(this.mediaItem);
  }
}
