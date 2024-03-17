import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  country: any;
  currency: any;
  nativeName: any;
  constructor(private countryService: CountryService) {
    const countryName = this.route.snapshot.params['name'];

    this.countryService.getCountryByName(countryName).subscribe((data) => {
      this.country = data[0];
      this.currency = Object.keys(this.country.currencies)[0];
      this.nativeName = (
        Object.values(this.country.name.nativeName)[0] as any
      ).common;
      console.log(this.country);
      console.log(this.country.flags.png);
    });
  }
}
