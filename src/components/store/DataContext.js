import React, {createContext, useContext, useState} from 'react';
import QueryContext from './QueryContext';

const DataContext = createContext({
    data_list: [],
    live_data: null,
    graph_data: [],
    no_data: false,
    update_data: async () => {},
    update_live_data: async () => {},
});

export const DataContextProvider = ({children}) => {
    const queryContext = useContext(QueryContext);
    const [dataList, setDataList] = useState([]);
    const [liveData, setLiveData] = useState(null);
    const [noData, setNoData] = useState(false);
    
    const updateData = async (filters) => {
        let api_route = `/api/sensors`;
        if(filters && filters.sort){
            api_route += `?sort=${filters.sort}`;
        }
        else{
            api_route += `?sort=${queryContext.sort}`;
        }
        if(filters && filters.limit){
            api_route += `&limit=${filters.limit}`;
        }
        else if(queryContext.limit){
            api_route += `&limit=${queryContext.limit}`
        }
        if(filters && filters.skip){
            api_route += `&skip=${filters.skip}`;
        }
        else if(queryContext.skip){
            api_route += `&skip=${queryContext.skip}`;
        }
        if(filters && filters.rangeStart){
            api_route += `&rangeStart=${new Date(filters.rangeStart).toISOString()}`;
        }
        else if(queryContext.rangeStart){
            api_route += `&rangeStart=${new Date(queryContext.rangeStart).toISOString()}`;
        }
        if(filters && filters.rangeEnd){
            api_route += `&rangeEnd=${new Date(filters.rangeEnd).toISOString()}`;
        }
        else if(queryContext.rangeEnd){
            api_route += `&rangeEnd=${new Date(queryContext.rangeEnd).toISOString()}`;
        }        
        try{
            const resp = await fetch(api_route);
            const data = await resp.json();
            if(data.length === 0){
                setNoData(true);
            }
            await setDataList(data);
        } catch(err) {
            console.log(err)
        }
    }

    const updateLiveData = async () => {
        try {
            const resp = await fetch(
              `/api/sensors/last`
            );
            
            const { temp, humid, light, createdAt } = await resp.json();
            await setLiveData({
              temp: temp,
              humidity: humid,
              light: light,
              time: createdAt,
            });
        }
        catch(err) {
            console.log(err);
        }
    }

    const context = {
        data_list: dataList,
        live_data: liveData,
        graph_data: [...dataList].sort((a, b) => (a.updatedAt > b.updatedAt) ? 1 : -1),
        no_data: noData,
        update_data: updateData,
        update_live_data: updateLiveData,
    }

    return (
        <DataContext.Provider value={context}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;
