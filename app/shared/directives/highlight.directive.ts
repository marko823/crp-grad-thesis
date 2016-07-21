import {ElementRef, Directive, HostListener, Input} from "@angular/core";

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {

    private el:HTMLElement;
    private defaultColor = "#f6f7f7";

    @Input('myHighlight')
    highlightColor:string;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        this.highlight(this.highlightColor || this.defaultColor);
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.highlight(null);
    }

    private highlight(color:string){
        this.el.style.backgroundColor = color;
    }


}