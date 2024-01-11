const useSelectFilter = (filter: string | undefined, 
    routeTo: string | undefined) => {
    
    return filter && filter !== "all"?
    filter:
    routeTo && routeTo?
    routeTo:
    undefined;

};
export default useSelectFilter;