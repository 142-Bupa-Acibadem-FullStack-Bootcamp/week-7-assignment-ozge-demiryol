import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  input: number = 0;
  current_currency: string = 'TL';
  target_currency: string = 'USD';
  currencies: string[] = ['TL', 'EUR', 'USD', 'GBP'];
  ratios: any = {
    TL: 1,
    EUR: 0.06,
    USD: 0.07,
    GBP: 0.05,
  };
  constructor() {}

  ngOnInit(): void {}

  convertCurrencies(): number {
    //klavyeden girilen sayiyla doviz kuru carpilir
    let result = this.input *(this.ratios[this.target_currency] / this.ratios[this.current_currency]);
    //sayi 0 degilse sayinin son iki hanesini al, 0 ise oldugu gibi dondur demek
    if (this.input > 0) {
      return parseFloat(result.toFixed(2)); // sonucun 2 hanesini almak icin toFixed metodu kullanilir ancak toFixed metodu string dondurdugu icin parseFloat kullanilarak number'a cevrilir
    } else {
      return result;
    }
  }

  clearCalculation(): void {
    this.input = 0;
    this.current_currency = 'TL';
    this.target_currency = 'USD';
  }
}
