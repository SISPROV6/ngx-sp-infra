import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: number | string): string {
    const VALUE: string = value.toString();

    if (VALUE.length !== 11) return 'Formato inválido';

    const DDD: string = VALUE.slice(0, 2);
    const PART_1: string = VALUE.slice(2, 7);
    const PART_2: string = VALUE.slice(7);

    return `(${DDD}) ${PART_1}-${PART_2}`;
  }

}
