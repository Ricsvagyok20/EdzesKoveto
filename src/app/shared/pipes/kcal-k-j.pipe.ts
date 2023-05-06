import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kcalKJ'
})
export class KcalKJPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let kj = value * 4.184;
    return value + 'kcal or ' + kj + ' kJ';
  }

}
