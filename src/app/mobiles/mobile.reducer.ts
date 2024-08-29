import { createReducer, on } from "@ngrx/store";
import { Mobile } from "../models/mobile";
import * as MobileActions from './mobile.actions';

export interface MobileState {
    mobiles: Mobile[];
    selectedMobile: Mobile | null;
    error: any;
  }
  
  export const initialState: MobileState = {
    mobiles: [],
    selectedMobile: null,
    error: null,
  };
  
  export const mobileReducer = createReducer(
    initialState,
    on(MobileActions.loadMobilesSuccess, (state, { mobiles }) => ({ ...state, mobiles, error: null })),

    on(MobileActions.loadMobilesFailure, (state, { error }) => ({ ...state, error })),
    on(MobileActions.selectMobile, (state, { mobileId }) => ({
      ...state,
      selectedMobile: state.mobiles.find(mobile => mobile.id === mobileId) || null,
    }))
  );