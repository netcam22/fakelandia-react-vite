import { MISDEMEANOURS, MisdemeanourKind } from "../types/misdemeanours.types";
import { useParams } from "react-router-dom";

const useMisdemeanourRoute = ()
	: {[x: string]: string} | undefined => {
		const {paramKind} = useParams() as unknown as {[x: string]: string};
		const param = paramKind as unknown as MisdemeanourKind;
		return MISDEMEANOURS.includes(param)? {paramKind} : undefined;
};

export default useMisdemeanourRoute;