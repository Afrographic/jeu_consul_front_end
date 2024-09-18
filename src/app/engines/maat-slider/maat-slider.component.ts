import { HelperFunction } from './../../utils/helper_function';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// focus les dots sur le slide approprier

@Component({
  selector: 'app-maat-slider',
  templateUrl: './maat-slider.component.html',
  styleUrls: ['./maat-slider.component.scss']
})
export class MaatSliderComponent implements OnInit {
  @Output() On_delete = new EventEmitter();
  @Input() enable_snapping = true;
  @Input() show_dots = true;
  @Input() full_screen = true;
  @Input() edit_mode = false;
  @Input() rounded_corner = true;
  @Input() must_revert = true;
  @Input() images: string[] = [];

  @Input() from_image_preview = false;
  @Input() from_add_image = false;
  @Input() total_images = 0;


  maatSliderContainer_id = `id${HelperFunction.uid()}`;
  maatSliderItem_class = `id${HelperFunction.uid()}`;

  slide_enabled = true;

  can_emit_image_index = true;


  // Edit slider items
  delete(e: any, image_index: number) {
    e.stopPropagation();
    if (!this.can_emit_image_index) return;
    this.On_delete.emit(image_index);
    this.can_emit_image_index = false;
    this.enable_emit_index();
  }

  async enable_emit_index() {
    await HelperFunction.sleep(1000);
    this.can_emit_image_index = true;
  }

  constructor() { }

  async ngOnInit(): Promise<void> {
    await HelperFunction.sleep(100);
    this.initTheSlider();
    this.distributeSlideItems();
    this.init_full_screen();
    this.init_rounded_corner();
    this.add_aspect_ratio();

    // Computer current position
    this.compute_current_position();
  }

  async compute_current_position() {
    if (this.from_image_preview) {
      let box_width = this.total_images * 100;
      this.currentPosition = $(window).width() - box_width / 2 - $(window).width() / 2;
      this.moveSliderContainer(0);
    }

    if (this.from_add_image) {
      let box_width = this.total_images * 490.19;
      this.currentPosition = $(window).width() - box_width / 2 - $(window).width() / 2 - 739;
      this.moveSliderContainer(0);
    }
  }

  // this add a default height to a slider container
  add_aspect_ratio() {
    if (this.must_revert) {
      $(".maatSliderContainer").css("aspect-ratio", "1/1");
    }
  }

  init_full_screen() {
    if (this.full_screen) {
      $(".maatSliderContainer").css("width", "100vw");
      return;
    }
    $(".maatSliderContainer").css("width", "100%");
  }

  init_rounded_corner() {
    if (this.rounded_corner) {
      $(".maatSliderItem").css("border-radius", "8px");
      return;
    }
  }

  startpos = 0;
  endPos = 0;
  currentPosition = 0;
  lastPosition = 0;
  traveledDistance = 0;

  dots: Dot[] = [];
  currentActiveDotIndex = 0;

  async autoSlide() {
    let position = 0;
    while (1) {

      if (position < this.lastPosition) {
        position += $(window).width();
        this.moveSlider(-position);
      } else {
        this.moveSlider(0);
        position = 0;
      }
    }
  }

  async distributeSlideItems() {
    ;
    let initLeftPosition = 50;
    for (let i = 0; i < $(`#${this.maatSliderContainer_id} .maatSliderItem`).length; i++) {
      $(`#${this.maatSliderContainer_id} .maatSliderItem`)[i].style.left = `${initLeftPosition + 100 * i}%`;
      this.dots.push({ isActive: false, sliderItemIndex: i });
    }

    // init the last position
    this.lastPosition = ($(`#${this.maatSliderContainer_id} .maatSliderItem`).length - 1) * $(window).width();

    // Make the first Dot active
    if (this.dots.length > 0) {
      this.dots[0].isActive = true;
    }

    // Init the automatic slide
    // this.autoSlide();
  }


  moveSlider(position: number) {
    $(`#${this.maatSliderContainer_id}`).css("transform", `translateX(${position}px)`);
    this.currentPosition = position;
    let activeIndex = Math.abs(this.currentPosition) / $(window).width();
    this.setActiveDot(activeIndex);
  }

  setActiveDot(index: number) {
    if (this.dots[index] == undefined) return;
    this.dots[this.currentActiveDotIndex].isActive = false;
    this.dots[index].isActive = true;
    this.currentActiveDotIndex = index;
  }

  focusOnSliderItem() {
    if (this.currentPosition == 0 || this.currentPosition == -this.lastPosition) {
      return;
    }

    // if (!this.enable_snapping) {
    //   return;
    // }

    if (this.traveledDistance < 0) {

      let position = -(this.currentActiveDotIndex + 1) * $(window).width();
      let activeIndex = Math.abs(position) / $(window).width();
      this.setActiveDot(activeIndex);

    } else {

      let position = -(this.currentActiveDotIndex - 1) * $(window).width();
      let activeIndex = Math.abs(position) / $(window).width();
      this.setActiveDot(activeIndex);

    }

  }

  focusOnSliderOnDotClick(index: number) {
    this.setActiveDot(index);
    this.moveSlider(-$(window).width() * index);
  }

  computeIndexFromPosition(position: number) {
    return ((Math.abs(position) + 100) / 100) - 1;
  }

  computePositionFromIndex(index: number) {
    return -index * 100;
  }

  revertToFirstItemIfNecessary() {
    if (!this.must_revert) return;
    if (this.currentPosition >= 0) {
      this.currentPosition = 0;
      this.moveSliderContainer(0);
    }
  }

  revertToLastItem() {
    if (!this.must_revert) return;
    if (this.currentPosition < -this.lastPosition) {
      this.currentPosition = 0;
      this.moveSliderContainer(-this.lastPosition);
      this.currentPosition = -this.lastPosition;
    }
  }

  moveSliderContainer(travelledDistance: any) {
    $(`#${this.maatSliderContainer_id}`).css("transform", `translateX(${this.currentPosition + travelledDistance}px)`);
  }

  getTravelledDistance(startPos: any, endPos: any) {
    return startPos - endPos;
  }

  convertPositionToPercentage(pos: any) {
    return (100 * pos) / $(window).width();
  }

  // Touch events

  behaviorOnTouchStart(e: any) {

    if (!this.slide_enabled) return;
    let touch = e.changedTouches[0];
    this.startpos = touch.pageX;
  }

  behaviorOnTouchMove(e: any) {

    if (!this.slide_enabled) return;
    let touch = e.changedTouches[0];
    this.endPos = touch.pageX;
    let travelledDistance = this.endPos - this.startpos;
    this.moveSliderContainer(travelledDistance);
  }

  behaviorOnTouchEnd(e: any) {

    if (!this.slide_enabled) return;
    let touch = e.changedTouches[0];
    this.endPos = touch.pageX;
    this.traveledDistance = this.endPos - this.startpos;
    this.currentPosition = this.currentPosition + (this.endPos - this.startpos);
    this.revertToFirstItemIfNecessary();
    this.revertToLastItem();
    this.focusOnSliderItem();
  }

  // Mouse events
  behavior_mouse_down(e: any) {

    if (!this.slide_enabled) return true;
    this.startpos = e.pageX;
    return true;
  }

  behavior_mouse_move(e: any) {

    if (!this.slide_enabled) return;
    this.endPos = e.pageX;
    let travelledDistance = this.endPos - this.startpos;
    this.moveSliderContainer(travelledDistance);
  }

  behavior_mouse_up(e: any) {

    if (!this.slide_enabled) return;
    this.endPos = e.pageX;
    this.traveledDistance = this.endPos - this.startpos;
    this.currentPosition = this.currentPosition + (this.endPos - this.startpos);
    this.revertToFirstItemIfNecessary();
    this.revertToLastItem();
    this.focusOnSliderItem();
  }

  mouse_down = false;

  initTheSlider() {
    // Init touch events
    $(`#${this.maatSliderContainer_id}`).on('touchstart', (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      this.behaviorOnTouchStart(e);
    })

    $(`#${this.maatSliderContainer_id}`).on('touchmove', (e: any) => {
      e.stopPropagation();
      this.behaviorOnTouchMove(e);
    })

    $(`#${this.maatSliderContainer_id}`).on('touchend', (e: any) => {
      e.stopPropagation();
      this.behaviorOnTouchEnd(e);
    })

    $(`#${this.maatSliderContainer_id}`).on('touchcancel', (e: any) => {
      e.stopPropagation();
      this.behaviorOnTouchEnd(e);
    })

    // Init mouse events
    try {
      let maatSliderContainer: any = document.querySelector(`#${this.maatSliderContainer_id}`);
      let mat_slider_container = maatSliderContainer.parentNode;


      mat_slider_container.addEventListener('mousedown', (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        this.mouse_down = true;
        this.behavior_mouse_down(e);
      })

      mat_slider_container.addEventListener('mousemove', (e: any) => {
        e.stopPropagation();
        if (this.mouse_down) {
          this.behavior_mouse_move(e);
        }
      })

      mat_slider_container.addEventListener('mouseup', (e: any) => {
        e.stopPropagation();
        this.mouse_down = false;
        this.behavior_mouse_up(e);
      })

    } catch {
      //Nothing to be worried
    }

  }

  disable_slide_behavior() {
    this.slide_enabled = false;
  }

  enable_slide_behavior() {
    this.slide_enabled = true;
  }

}

interface Dot {
  sliderItemIndex: number;
  isActive: boolean;
}


declare let $: any;