import { SelectOptions } from '../data/filter_misdemeanour_form_data';
import { MisdemeanourObject } from '../types/misdemeanour_client_types';

const useMisdemeanourFilter = (misdemeanourData: Array<MisdemeanourObject> | undefined, 
  selectedFilter: SelectOptions | undefined, routeTo: SelectOptions | undefined) => {
    
    const filter = selectedFilter && selectedFilter.filterMisdemeanours !== "all"?
    selectedFilter.filterMisdemeanours:
    routeTo && routeTo?.paramKind?
    routeTo.paramKind:
    undefined;

  if (misdemeanourData) {
    if (filter) {
    return misdemeanourData.filter((row: MisdemeanourObject) => row.misdemeanour 
        === filter);
    }
    else {
      return misdemeanourData;
    }
  }
  return null

};
export default useMisdemeanourFilter;
