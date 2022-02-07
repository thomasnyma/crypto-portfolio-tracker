import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinInfoService } from 'src/app/shared/services/coin-info.service';
import { Coin } from 'src/app/shared/models/coin.model';

@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.component.html',
  styleUrls: ['./coin-info.component.scss']
})
export class CoinInfoComponent implements OnInit {
  coin?: Coin;
  currencyId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private activatedRoute: ActivatedRoute, public coinInfoService: CoinInfoService) { }

  ngOnInit() {
    this.coinInfoService.findOne(this.currencyId!.toUpperCase()).subscribe(data => this.coin = data.getCoinInfo[0]);
  }
}
