import React, { createContext, useCallback, useMemo } from 'react';
import { createItemMachine } from './machine';
import { useMachine } from '@xstate/react';

export const CreateItemContext = createContext({});

export const CreateItemProvider = ({ children }) => {
    const _machineMemoized = useMemo(() => createItemMachine, [])
    const [machineState, send] = useMachine(_machineMemoized);
    console.log('[createItemProvider] Machine : ', machineState.context);
    const { context } = machineState;

    const updateAttribute = useCallback((params) => send({ type: 'UPDATE_ATTRIBUTE', ...params }), [context]);
    const submit = useCallback(() => send({ type: 'SUBMIT' }), []);
    return <CreateItemContext.Provider value={{ ...context, submit, updateAttribute }}>
        {children}
    </CreateItemContext.Provider>
}