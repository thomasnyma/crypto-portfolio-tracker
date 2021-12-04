import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/shared/models/coin.model';
import { CoinInfoService } from 'src/app/shared/services/coin-info.service';

@Component({
  selector: 'app-fetch-prices',
  templateUrl: './fetch-prices.component.html',
  styleUrls: ['./fetch-prices.component.scss'],
})
export class FetchPricesComponent implements OnInit {
  coinInfo?: Coin[];
  loading = true;
  // Example search:
  currency: string = 'ETH,LTC,BTC,LINK,XRP,DOGE,ADA';

  constructor(public coinInfoService: CoinInfoService) {}

  ngOnInit() {
    this.update(this.currency);
  }

  update(currency: string) {
    this.coinInfoService.findAll(currency).subscribe((data) => {
      this.coinInfo = data.getCoinInfo;
      this.loading = false;
    });
  }
}
