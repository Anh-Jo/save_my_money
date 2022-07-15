import { assign, createMachine } from "xstate";

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
                delay: 300
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

}

export const createItemMachine = createMachine(machine, options)