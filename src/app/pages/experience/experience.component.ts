import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'experience-component',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private elem: ElementRef) { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  checkForHiddenElements(): void {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0;
    console.log("pageYOffset", window.pageYOffset);
    console.log("document.documentElement.scrollTop", document.documentElement.scrollTop);
    console.log("document.body.scrollTop", document.body.scrollTop);

    let elements: NodeListOf<Element> = this.elem.nativeElement.querySelectorAll('.hideme');

    elements.forEach(() => {

    })

  }
}
