import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import Country from '../country';
import { Subscription, take } from 'rxjs';
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  route: ActivatedRoute = inject(ActivatedRoute);
  country!: Country;
  currency: any;
  nativeName: any;
  private subscription?: Subscription;
  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    const countryName = this.route.snapshot.params['name'];
    this.subscription = this.countryService
      .getCountryByName(countryName)
      .pipe(take(1))
      .subscribe((data) => {
        this.country = data[0];
        this.currency = Object.keys(this.country.currencies)[0];
        this.nativeName = (
          Object.values(this.country.name.nativeName)[0] as any
        ).common;
      });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
