import MisdemeanourItem from "./misdemeanour-item";
import { useContext } from "react";
import { MisdemeanourFilterContext } from "./misdemeanour-container";
import { MisdemeanourObject } from "../../types/misdemeanour_client_types";
import { MisdemeanourContext } from "./misdemeanour-data-wrapper";
import useMisdemeanourFilter from "../../hooks/use_misdemeanour_filter";

const MisdemeanourList : React.FC = () => {

const [misdemeanourData] =  useContext(MisdemeanourContext);
const [selectedFilter] = useContext(MisdemeanourFilterContext);
const filteredMisdemeanours: Array<MisdemeanourObject> | null = 
useMisdemeanourFilter(misdemeanourData, selectedFilter);

return (
        <>
        {filteredMisdemeanours &&
        filteredMisdemeanours.map((item: MisdemeanourObject) =>
        (<MisdemeanourItem key={item.indexValue} citizenId={item.citizenId} 
        misdemeanour = {item.misdemeanour} date = {item.date}
        indexValue = {item.indexValue} />)
        )}
        </>
)
}

export default MisdemeanourList;