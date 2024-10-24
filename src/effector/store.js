import {createEffect, createEvent, createStore} from "effector";


export const addItem = createEvent();

export const removeItem = createEvent();

export const fetch = createEffect(async () => {
    return new Promise((res) => {
        setTimeout(() => {
            res([
                {id: 1, name: 'Задача 1'},
                {id: 2, name: 'Задача 2'},
            ]);
        }, 1000);
    });
});


export const itemsStore = createStore([])
    .on(fetch.doneData, ([], items) => items)
    .on(addItem, (state, item) => [...state, item])
    .on(removeItem, (state, id) => state.filter(item => item.id !== id));