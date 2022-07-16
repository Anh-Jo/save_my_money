import React, { createContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            const data = await Auth.currentUserInfo();
            setUser(data)
        })();
    }, []);

    console.log('[userContextProvider] value : ', user)
    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}