import { SelectOptions } from '../data/filter_misdemeanour_form_data';
import { MisdemeanourObject } from '../types/misdemeanour_client_types';

const useMisdemeanourFilter = (misdemeanourData: Array<MisdemeanourObject> | undefined, 
  selectedFilter: SelectOptions | undefined) => {

  if (misdemeanourData) {
    if (selectedFilter && selectedFilter.filterMisdemeanours !== "all") {
    return misdemeanourData.filter((row: MisdemeanourObject) => row.misdemeanour 
        === selectedFilter.filterMisdemeanours);
    }
    else {
      return misdemeanourData;
    }
  }
  return null

};
export default useMisdemeanourFilter;
