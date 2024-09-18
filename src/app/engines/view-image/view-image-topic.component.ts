
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Image_Viewer } from 'src/app/models/image_viewer';
import { set_view_port } from 'src/app/services/screen_view_port';
import { c_transition } from 'src/app/utils/animation';


@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss'],
  animations:[c_transition]
})
export class View_Image_Topic_Component implements OnInit, OnDestroy,AfterViewInit {
  @Input() images: Image_Viewer[] = [];
  @Input() image: Image_Viewer = new Image_Viewer();
  url: any;
  bg_url: any;
 

  @Output() on_close = new EventEmitter(); 

  downloading = false;
  loaded_percentage = "0%";
  can_render_image = false;

  current_active_index = 0;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.get_image();
    this.set_active_index();
    this.x_init = $(".handle").position().left;
    this.zoom_area_width = $(".zoom_parent").width();
  }

  ngOnDestroy(): void {
    this.images[this.current_active_index].on_view = false;
  }

  ngAfterViewInit(): void {
    set_view_port();
  }

  close() {
    this.on_close.emit();
    
  }

  set_active_index() {
    for (const image of this.images) {
      if (image.url == this.image.url) {
        let index = this.images.indexOf(image);
        this.images[index].on_view = true;
        this.current_active_index = index;
      }
    }
  }

  async get_image() {

    this.bg_url = this.image.url
    this.url = this.image.url;
    this.can_render_image = true;

  }


  position_image_to_top_center() {

    let myImg: any = document.querySelector(".current_image");
    let image_width = myImg.getBoundingClientRect().width;
    let image_height = myImg.getBoundingClientRect().height;

    let vp_height = $(window).height();
    let vp_width = $(window).width(); 

    let x = (vp_width / 2) - (image_width / 2);
    let y = 0;

    $(".current_image").css("left", `${x}px`)
    $(".current_image").css("top", `${y}px`)

  }


  // zoom handler
  can_zoom = false;
  x_init = 0;
  x_current = 0;
  zoom_area_width = 0;
  current_scale = 1;

  init_zoom_desktop(e: any) {
    e.stopPropagation();
    this.x_current = e.clientX;
    this.can_zoom = true;
  }

  zoom_desktop(e: any) {
    e.stopPropagation();
    if (this.can_zoom) {
      this.zoom(e.clientX);
    }
  }

  stop_zoom(e: any) {
    e.stopPropagation();
    this.can_zoom = false;
  }

  // -- Mobile friendly zoom control
  init_zoom_mobile(e: any) {
    e.stopPropagation();
    let touch = e.changedTouches[0];
    this.x_current = touch.clientX;
    this.can_zoom = true;
  }

  zoom_mobile(e: any) {
    e.stopPropagation();
    let touch = e.changedTouches[0];
    let clientX = touch.clientX;
    this.zoom(clientX);
  }


  //Zoom engine
  zoom(clientX: number) {
    this.x_current = clientX - 10;
    let dx = this.x_current - this.x_init;
    if (dx < 0) {
      dx = 0;
    }
    if (dx > this.zoom_area_width) {
      dx = this.zoom_area_width;
    }
    let zoom_level = dx * 100 / this.zoom_area_width;
    $(".zoom_level").css("width", `${zoom_level}%`);

    let scale_value = 3 * dx / this.zoom_area_width;
    $(".current_image").css("transform", `scale(${1 + scale_value})`);
    this.current_scale = 1 + scale_value;
  }
  // End Zoom Handler


  //Pan handler
  can_pan = false;
  x0 = 0;
  y0 = 0;
  current_x = 0;
  current_y = 0;

  init_pan_desktop(e: any) {
    this.init_pan(e.clientX, e.clientY);
  }

  pan_desktop(e: any) {
    if (this.can_pan) {
      this.pan(e.clientX, e.clientY);
    }
  }

  init_pan_mobile(e: any) {
    let touch = e.changedTouches[0];
    this.init_pan(touch.clientX, touch.clientY);
  }

  pan_mobile(e: any) {
    let touch = e.changedTouches[0];
    this.pan(touch.clientX, touch.clientY);
  }

  stop_pan(e: any) {
    this.can_pan = false;
  }

  init_pan(clientX: number, clientY: number) {
    this.x0 = clientX;
    this.y0 = clientY;
    this.current_x = parseInt($(".current_image").css("left"));
    this.current_y = parseInt($(".current_image").css("top"));
    this.can_pan = true;
  }

  pan(clientX: number, clientY: number) {
    if (this.description_active) return;
    let dx = clientX;
    let dy = clientY;
    let distance_x = dx - this.x0;
    let distance_y = dy - this.y0;
    let new_x = this.current_x + distance_x;
    let new_y = this.current_y + distance_y;
    $(".current_image").css("left", `${new_x}px`)
    $(".current_image").css("top", `${new_y}px`)
  }

  prevent_default(e: any) {
    e.preventDefault();
  }

  image_rendered(e: any) {
    this.position_image_to_top_center();
  }

  // view new image
  view_new_image(payload: any, index: number) {

    this.image = this.images[index];
    this.images[this.current_active_index].on_view = false;
    this.images[index].on_view = true;
    this.current_active_index = index;
    $(".current_image").css("transform", `scale(1)`);
    $(".zoom_level").css("width", `0%`);
    this.current_scale = 1;
    this.bg_url = payload.url;
    this.url = this.sanitizer.bypassSecurityTrustUrl(payload.url);
  }

  // Preview description
  description_active = false;
  description_in_active = true;

  toggle_description() {
    this.description_active = !this.description_active;
    this.description_in_active = !this.description_in_active;
  }


  // Menu
  menu_active = false;
  show_menu() {
    this.menu_active = true;
  }
  hide_menu() {
    this.menu_active = false;
  }

  // delete handler
  confirm_delete = false;
  close_confirm_delete() {
    this.confirm_delete = false;
  }
  delete_init() {
    this.confirm_delete = true;
  }

  // Web Menu
  web_menu_active = false;
  show_web_menu() {
    this.web_menu_active = true;
  }

  hide_web_menu() {
    this.web_menu_active = false;
  }

}


declare var $: any;