
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image_Viewer } from 'src/app/models/image_viewer';


@Component({
  selector: 'app-view-image-item',
  templateUrl: './view-image-item.component.html',
  styleUrls: ['./view-image-item.component.scss']
})
export class View_Image_Item_Topic_Component implements OnInit {
  @Input() image: Image_Viewer = new Image_Viewer();
  @Output() on_view_image = new EventEmitter();

  size = "";
  url = "";

  cached = false;
  downloading = false;

  loaded_percentage = "0%";

  constructor(private router: Router) { }

  ngOnInit(): void {

  }



  view_image() {
    let payload = {
      image: this.image,
      url: this.image.url
    }
    this.on_view_image.emit(payload);
  }

}
