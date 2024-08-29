import { createAction, props } from "@ngrx/store";
import { Mobile } from "../models/mobile";

export const loadMobiles = createAction('[Mobile] Load Mobiles');
export const loadMobilesSuccess = createAction('[Mobile] Load Mobiles Success', props<{ mobiles: Mobile[] }>());
export const loadMobilesFailure = createAction('[Mobile] Load Mobiles Failure', props<{ error: any }>());
export const selectMobile = createAction('[Mobile] Select Mobile', props<{ mobileId: number }>());