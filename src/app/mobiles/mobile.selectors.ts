
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MobileState } from './mobile.reducer';

export const selectMobileState = createFeatureSelector<MobileState>('mobile');

export const selectAllMobiles = createSelector(selectMobileState, (state: MobileState) => state.mobiles);
export const selectSelectedMobile = createSelector(selectMobileState, (state: MobileState) => state.selectedMobile);
export const selectSelectedMobileColors = createSelector(selectMobileState, (state: MobileState) => state.selectedMobile?.colors || []);

