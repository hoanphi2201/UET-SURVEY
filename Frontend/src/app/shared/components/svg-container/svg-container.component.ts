import { Component, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { SvgService } from './svg.service';
import { isPlatformBrowser } from '@angular/common';

export interface SvgTemplateMetadata {
  id: string;
  viewBox: string;
  width: number;
  height: number;
}
interface SvgTemplateMetadataWithElt extends SvgTemplateMetadata {
  elt: SVGElement;
}

@Component({
  selector: 'svg-container',
  templateUrl: './svg-container.component.html',
  styleUrls: ['./svg-container.component.scss']
})
export class SvgContainerComponent {

  @ViewChild('anchor', {static: false}) templateContainer: ElementRef;
  private isBrowser: boolean = false;
  private parser: any;

  constructor(private svgService: SvgService, @Inject(PLATFORM_ID) platformId: Object) {
    this.svgService.addContainer(this);
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.parser = new DOMParser();
    }
  }

  add(id: string, svgContent: string): SvgTemplateMetadata {
    const containerElt = <SVGElement>this.templateContainer.nativeElement;
    const svgTemplateMetadata = this.createSvgTemplate(id, svgContent);
    containerElt.appendChild(svgTemplateMetadata.elt);
    delete svgTemplateMetadata.elt;
    return svgTemplateMetadata;
  }

  getClone(id: string) {
    const containerElt = <SVGElement>this.templateContainer.nativeElement;
    const elt = containerElt.querySelector(`#${id}`);
    const clone = elt.cloneNode(true) as SVGElement;
    const randomValue = Math.floor(Math.random() * 10000);
    clone.setAttribute('id', `${id}_clone_${randomValue}`);
    return clone;
  }

  private createSvgTemplate(id: string, svgContent: string): SvgTemplateMetadataWithElt {
    const div = document.createElement('div');
    div.innerHTML = svgContent;
    const svg = div.querySelector('svg');
    const templateElt = document.createElementNS('http://www.w3.org/2000/svg', 'g') as SVGElement;
    templateElt.setAttribute('id', id);
    while (svg.childNodes.length > 0) {
      templateElt.appendChild(svg.childNodes[0]);
    }
    return {
      id: id,
      elt: templateElt,
      viewBox: svg.getAttribute('viewBox'),
      width: parseInt(svg.getAttribute('width'), 10),
      height: parseInt(svg.getAttribute('height'), 10)
    };
  }

  private stripMetadata(content: string) {
    return content.replace(/^(.|[\r\n])*<svg.*>((.|[\r\n])*)<\/svg>/, '$2');
  }

}
