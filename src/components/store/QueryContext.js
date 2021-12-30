import React from "react"; 
import {useState, createContext} from 'react';

const QueryContext = createContext({
    sort: "updatedAt1",
    rangeStart: null,
    rangeEnd: null,
    limit: null,
    skip: 0,
    changeFilters: () => {},
})

export const QueryContextProvider = ({children}) => {
    const [filters, setFilters] = useState({
        sort: "updatedAt1",
        rangeStart: null,
        rangeEnd: null,
        limit: null,
        skip: 0,
        });

    const changeFiltersHandler = (newFilters) => {
        let temp_obj = {...filters};
        if(newFilters.sort !== undefined && newFilters.sort !== null){
            temp_obj.sort = newFilters.sort;
        }
        if(newFilters.limit !== undefined && newFilters.limit !== null){
            temp_obj.limit = newFilters.limit;
        }
        if(newFilters.skip !== undefined && newFilters.skip !== null){
            temp_obj.skip = newFilters.skip;
        }
        if(newFilters.rangeStart !== undefined && newFilters.rangeStart !== null){
            temp_obj.rangeStart= newFilters.rangeStart;
        }
        if(newFilters.rangeEnd !== undefined && newFilters.rangeEnd !== null){
            temp_obj.rangeEnd = newFilters.rangeEnd;
        }
        setFilters(temp_obj);
    }

    const context = {
        sort: filters.sort,
        rangeStart: filters.rangeStart,
        rangeEnd: filters.rangeEnd,
        limit: filters.limit,
        skip: filters.skip,
        changeFilters: changeFiltersHandler,
    }

    return(
        <QueryContext.Provider value={context}>
            {children}
        </QueryContext.Provider>
    );

}

export default QueryContext;
