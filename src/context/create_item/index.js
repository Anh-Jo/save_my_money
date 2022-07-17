import React, { createContext, useCallback, useMemo } from 'react';
import { createItemMachine } from './machine';
import { useMachine } from '@xstate/react';
import { useNavigation } from '@react-navigation/native';

export const CreateItemContext = createContext({});

export const CreateItemProvider = ({ children }) => {
    const { goBack } = useNavigation();

    const _machineMemoized = useMemo(() => createItemMachine.withConfig({
        actions: {
            goBack
        }
    }), []);

    const [machineState, send] = useMachine(_machineMemoized);

    const { context } = machineState;

    const updateAttribute = useCallback(
        (params) => send({ type: 'UPDATE_ATTRIBUTE', ...params }), 
    [context]);
    
    const submit = useCallback(() => send({ type: 'SUBMIT' }), []);
    console.log('[createItemProvider] Machine : ', machineState.context);
    return <CreateItemContext.Provider value={{ ...context, submit, updateAttribute }}>
        {children}
    </CreateItemContext.Provider>
}