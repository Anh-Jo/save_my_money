import { API, graphqlOperation, } from "aws-amplify";
import { assign, createMachine } from "xstate";
import { createWage } from '../../graphql/mutations';
const machine = {
    id: 'createItemMachine',
    initial: 'idle',
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
            always: {
                target: 'idle',
                delay: 3000
            }
        }
    }
}

/**
 *  assign((context, event) => {
    return {
      count: context.count + event.value,
      message: 'Count changed'
    }
 */
const options = {
    actions: {
        updateState: assign((_, event) => ({
            [event.attr]: event.value
        })
        )
    },
    guards: {
        formIsFill: () => true
    },
    services: {
        createItem
    }
}

async function createItem() {
    try {
        console.log('createItem ')
        const data = {
            name: "Salaires",
            amount: "300000",
            frequencies: "MONTHLY"
        };
        const result = await API.graphql(graphqlOperation(createWage, { input: data }))
        console.log('CreateItem result : ', result)
    } catch (e) {
        console.log('createItem error : ', e)
    }
}

export const createItemMachine = createMachine(machine, options)