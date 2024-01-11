import { Fraction } from "./Fraction";
import { STIM_TYPES } from "./StimTypes";

export interface Stim extends Fraction {
  type: STIM_TYPES
  payload: string[]
}
