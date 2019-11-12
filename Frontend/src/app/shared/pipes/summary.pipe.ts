import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, maxLength: number = 12): string {
    if (value) {
      let str = value.replace(/(<([^>]+)>)/gim, '');
      return str.length > maxLength ? str.substr(0, maxLength) + '...' : str;
    }
    return value;
  }
}
