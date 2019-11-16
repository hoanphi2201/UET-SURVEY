import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SvgContainerComponent, SvgTemplateMetadata } from './svg-container.component';
import { clone } from 'lodash';

export interface SvgTemplate extends SvgTemplateMetadata {
  clone?: SVGElement;
}

@Injectable()
export class SvgService {

  private library = new Map<String, SvgTemplateMetadata>();
  private ongoingReqs = new Map<String, Promise<any>>();
  private container: SvgContainerComponent;
  constructor(private httpClient: HttpClient) {}

  addContainer(container: SvgContainerComponent) {
    this.container = container;
  }

  get(url: string, cloneSvgElt: boolean): Promise<SvgTemplate> {
    let p;
    if (this.library.has(url)) {
      p = Promise.resolve(this.library.get(url));
    } else if (this.ongoingReqs.has(url)) {
      p = this.ongoingReqs.get(url);
    } else {
      p = this.downloadSvg(url);
      this.ongoingReqs.set(url, p);
    }
    return p.then(metadata => {
      const metadataCopy = clone(metadata);
      if (cloneSvgElt) {
        metadataCopy.clone = this.container.getClone(metadata.id);
      }
      return metadataCopy;
    });
  }

  private downloadSvg(url: string) {
    return this.httpClient.get(url, {responseType: 'text'})
      .toPromise()
      .then(responseText => {
        const id = this.getId(url);
        const metadata = this.container.add(id, responseText);
        this.library.set(url, metadata);
        this.ongoingReqs.delete(url);
        return metadata;
      });
  }

  private getId(url: string) {
    return url.replace(/.+\/(.+).svg/, '$1') + new Date().getTime();
  }

}
