import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFormat'
})
export class ArrayFormatPipe implements PipeTransform {

  transform(values: string[]): unknown {
    return values.reduce((str, value) => str += `, ${value}`);
  }

}
