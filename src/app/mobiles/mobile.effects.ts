// src/app/state/mobile/mobile.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MobileService } from './mobile.service';
import * as MobileActions from './mobile.actions';

@Injectable()
export class MobileEffects {
  loadMobiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MobileActions.loadMobiles),
      mergeMap(() =>
        this.mobileService.getMobiles().pipe(
          map(mobiles => MobileActions.loadMobilesSuccess({ mobiles })),
          catchError(error => of(MobileActions.loadMobilesFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private mobileService: MobileService) {}
}
