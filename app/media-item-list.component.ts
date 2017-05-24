import { Component } from '@angular/core';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  mediaItems = [];
  medium = '';
  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    this.getMediaItems(this.medium);
  }
  getMediaItems(medium) {
    this.medium = medium;
    console.log(typeof this.mediaItemService.get(medium));
    this.mediaItemService.get(medium).subscribe(receive => {
      this.mediaItems = receive;
    });
  }
  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
  onMediaItemWatch(mediaItem) {
    this.mediaItemService.watch(mediaItem);
  }
}
