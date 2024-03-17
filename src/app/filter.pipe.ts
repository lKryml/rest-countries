import { Pipe, PipeTransform } from '@angular/core';
import Country from './country';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], filterValue: string): any {
    return data.filter((country) => {
      country.name.common.toLowerCase().includes(filterValue);
    });
  }
}
