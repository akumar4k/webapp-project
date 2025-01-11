import { FilterTypeItem } from './FilterTypeItem';

export interface FilterBarMenuItem {
  title: String;
  isExpanded: boolean;
  items: Array<FilterTypeItem>;
}
