import { Pipe, PipeTransform } from '@angular/core';
import Country from './country';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: Country[], searchInput: string, region: string): any {
    return data?.filter((country) => {
      if (region) {
        return (
          country.region === region &&
          country.name.common.toLowerCase().includes(searchInput.toLowerCase())
        );
      } else {
        return country.name.common
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      }
    });
  }
}
