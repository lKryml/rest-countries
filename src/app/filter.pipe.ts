import { Pipe, PipeTransform } from '@angular/core';
import Country from './country';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: Country[], searchInput: string): any {
    return data?.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
  }
}
