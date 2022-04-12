import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { Coin } from '../shared/models/coin.model';
import { CoinService } from '../shared/services/coin.service';

@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.component.html',
  styleUrls: ['./coin-info.component.scss'],
})
export class CoinInfoComponent implements OnInit {
  coin?: Coin;
  currencyId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coinService: CoinService
  ) {}

  ngOnInit(): void {
    this.getCoinInfo();
    this.router.events.pipe(debounceTime(100)).subscribe(() => {
      this.currencyId = this.activatedRoute.snapshot.paramMap.get('id');
      this.getCoinInfo();
    });
  }

  getCoinInfo(): void {
    this.coinService
      .getCoinInfo(this.currencyId!)
      .subscribe((response) => (this.coin = response));
  }
}
