import { Directive, ElementRef, RendererType2, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightV2]'
})
export class BetterHighlightV2Directive implements OnInit {
  @Input() defaultColor:string = 'transparent';
  @Input('appBetterHighlightV2') highlightColor:string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef:ElementRef) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = this.defaultColor;
  }
}
