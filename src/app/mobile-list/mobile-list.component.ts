
import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Mobile } from './../models/mobile';
import { AppState } from '../app.state';
import { loadMobiles, selectMobile } from '../mobiles/mobile.actions';
import { selectAllMobiles, selectSelectedMobileColors } from '../mobiles/mobile.selectors';

@Component({
  selector: 'app-mobile-list',
  template: `
    <div>
      <h2>Select a Mobile</h2>
      <ul>
        <li *ngFor="let mobile of mobiles$ | async" (click)="onSelectMobile(mobile.id)">
          {{ mobile.name }}
        </li>
      </ul>
      <div *ngIf="selectedColors$ | async as colors">
        <h3>Available Colors</h3>
        <ul>
          <li *ngFor="let color of colors">{{ color }}</li>
        </ul>
      </div>
    </div>
  `,
})
export class MobileListComponent implements OnInit {
  mobiles$: Observable<Mobile[]>;
  selectedColors$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.mobiles$ = this.store.select(selectAllMobiles);
    this.selectedColors$ = this.store.select(selectSelectedMobileColors);
  }

  ngOnInit(): void {
    this.store.dispatch(loadMobiles());
  }

  onSelectMobile(mobileId: number): void {
    this.store.dispatch(selectMobile({ mobileId }));
  }
}
