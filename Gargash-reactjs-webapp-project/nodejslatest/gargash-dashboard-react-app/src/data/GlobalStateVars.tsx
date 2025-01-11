import { atom } from 'recoil';
import { FilterBarMenuItem } from '../models/FilterBarMenuItem';

export const FilterBarMenuItems = atom<Array<FilterBarMenuItem>>({
  key: 'FilterBarMenuItems', // unique ID (with respect to other atoms/selectors)
  default: undefined // default value (aka initial value)
});
