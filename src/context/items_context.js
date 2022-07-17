import React, { createContext, useState, useEffect, useContext } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listWages } from '../graphql/queries';
import { onCreateWage } from '../graphql/subscriptions';
import { UserContext } from './user_context';

export const ItemsContext = createContext({ items: [] });

export const ItemsContextProvider = ({ children }) => {
    const [wages, setWages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { username } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await API.graphql(graphqlOperation(listWages));
                if (data?.listWages?.items) {
                    setWages(withType(data.listWages.items, 'wage'))
                }
            } catch (e) {
                console.log('[itemContextProvider] Erreur : ', e)
            } finally {
                setIsLoading(false)
            }
        })();
    }, []);

    useEffect(() => {
        if (username) {
            API.graphql(graphqlOperation(onCreateWage, { owner: username }))
                .subscribe({
                    next: ({ provider, value }) => {
                        console.log('New event ')
                        const newItem = value.data.onCreateWage
                        setWages(withType([...wages, newItem], 'wage'))
                    },
                    error: error => console.warn(error)
                });
        }
    }, [username])

    console.log('[itemContextProvider] Data : ', wages)

    return <ItemsContext.Provider value={{ items: wages, isLoading }}>
        {children}
    </ItemsContext.Provider>
}

const withType = (ref, type) => ref.map(item => ({ ...item, type }))