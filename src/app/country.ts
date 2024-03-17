export default class Country {
  name!: {
    common: string;
    nativeName: {};
  };
  population: number = 0;
  region: string = '';
  subregion: string = '';
  tld: string = '';
  languages: string[] = [];
  capital: string[] = [];
  currencies: {} = {};
  flags: {
    png: string;
  } = {
    png: '',
  };
}
