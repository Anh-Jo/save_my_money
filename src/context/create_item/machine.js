import { API, graphqlOperation, } from "aws-amplify";
import { assign, createMachine } from "xstate";
import { createWage } from '../../graphql/mutations';
import { FREQUENCIE_LIST_EN } from '../../constant';

const INITIAL_STATES = {
    name: '',
    amount: 1,
    frequencies: 1
};

const machine = {
    id: 'createItemMachine',
    initial: 'idle',
    context: INITIAL_STATES,
    states: {
        idle: {
            on: {
                'UPDATE_ATTRIBUTE': {
                    actions: ['updateState'],
                    target: 'idle'
                },
                'SUBMIT': [
                    {
                        cond: 'formIsFill',
                        target: 'creating'
                    },
                    {
                        target: 'idle'
                    }
                ]
            }
        },
        creating: {
            invoke: {
                src: 'createItem',
                onDone: {
                    target: 'cleaning'
                },
                onError: {
                    target: 'idle'
                }
            }
        },
        cleaning: {
            entry: 'cleanState',
            exit: 'goBack',
            always: {
                target: 'idle',
                delay: 3000
            }
        }
    }
}


const options = {
    actions: {
        updateState: assign((_, event) => ({
            [event.attr]: event.value
        })),
        cleanState: assign(() => INITIAL_STATES)
    },
    guards: {
        formIsFill: () => true
    },
    services: {
        createItem
    }
}

async function createItem({ name, amount, frequencies }, event) {
    try {
        const frequenciesField = FREQUENCIE_LIST_EN[frequencies];
        const input = {
            name,
            amount: amount * 100,
            frequencies: frequenciesField
        }
        const result = await API.graphql(graphqlOperation(createWage, { input }));
    } catch (e) {
        console.log('createItem error : ', e)
    }
}

export const createItemMachine = createMachine(machine, options)