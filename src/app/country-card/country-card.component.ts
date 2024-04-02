import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Subscription, of } from 'rxjs';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit, OnDestroy {
  private subscription?: Subscription;
  constructor(private countryService: CountryService) {}
  searchValue: string = '';
  regionValue: string = '';
  countries: any;

  ngOnInit(): void {
    this.subscription = this.countryService.getData().subscribe((val: any) => {
      this.countries = val;

      // for (let c of this.countries) {
      //   console.log(c.name.common);
      // }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
