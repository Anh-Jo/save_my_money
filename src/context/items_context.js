import React, { createContext, useState, useEffect } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listWages } from '../graphql/queries';
import { onCreateWage } from '../graphql/subscriptions';

export const ItemsContext = createContext({});

export const ItemsContextProvider = ({ children }) => {
    const [wages, setWages] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const data = await API.graphql(graphqlOperation(listWages));
                console.log('[itemContextProvider] Data : ', data)
                if (data.listWages.items) {
                    setWages(data.listWages.items)
                }
            } catch (e) {
                console.log('[itemContextProvider] Erreur : ', e)
            }
        })();
    }, [])

    // useEffect(() => {
    //     const unsubscribe = API.graphql(graphqlOperation(onCreateWage, { owner: "62049d4d-b32f-435f-8336-64345ab0aa88" }))
    //         .subscribe({
    //             next: ({ provider, value }) => console.log({ provider, value }),
    //             error: error => console.warn(error)
    //         });
    // }, [])

    console.log('[ItemsContextProvider] value : ', wages)

    return <ItemsContext.Provider value={{ wages }}>
        {children}
    </ItemsContext.Provider>
}