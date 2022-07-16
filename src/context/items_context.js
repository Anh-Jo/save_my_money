import React, { createContext, useState, useEffect, useContext } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listWages } from '../graphql/queries';
import { onCreateWage } from '../graphql/subscriptions';
import { UserContext } from './user_context';

export const ItemsContext = createContext({});

export const ItemsContextProvider = ({ children }) => {
    const [wages, setWages] = useState({});
    const { username } = useContext(UserContext);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await API.graphql(graphqlOperation(listWages));
                console.log('-> data ', data)
                if (data?.listWages?.items) {
                    setWages(data.listWages.items)
                }
            } catch (e) {
                console.log('[itemContextProvider] Erreur : ', e)
            }
        })();
    }, [])

    useEffect(() => {
        if (username) {
            console.log(username)
            const unsubscribe = API.graphql(graphqlOperation(onCreateWage, { owner: username }))
                .subscribe({
                    next: ({ provider, value }) => {
                        console.log('New event ')
                        const newItem = value.data.onCreateWage
                        setWages([...wages, newItem])
                    },
                    error: error => console.warn(error)
                });
        }
    }, [username])

    console.log('[itemContextProvider] Data : ', wages)

    return <ItemsContext.Provider value={{ items: wages }}>
        {children}
    </ItemsContext.Provider>
}