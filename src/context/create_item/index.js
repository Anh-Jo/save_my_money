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

    return <CreateItemContext.Provider value={{ ...context, updateAttribute }}>
        {children}
    </CreateItemContext.Provider>
}