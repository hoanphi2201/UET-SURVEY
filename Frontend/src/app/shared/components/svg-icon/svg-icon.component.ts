import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { SvgService, SvgTemplate } from '../svg-container/svg.service';

@Component({
  selector: 'svg-icon',
  templateUrl: 'svg-icon.component.html',
  styleUrls: ['svg-icon.component.scss']
})
export class SvgIconComponent implements OnChanges {

  @Input() src: string;
  @Input() clone = false;
  @ViewChild('svgContainer', {static: true}) svgContainer: ElementRef;

  metadata: SvgTemplate;

  constructor(private element: ElementRef, private svgService: SvgService) { }

  async ngOnChanges(changes: SimpleChanges) {
    try {
      if (changes.src && this.src) {
        this.metadata = await this.svgService.get(this.src, this.clone);
        if (this.clone) {
          const svgElt = this.element.nativeElement.querySelector('svg') as SVGElement;
          svgElt.appendChild(this.metadata.clone);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

}
