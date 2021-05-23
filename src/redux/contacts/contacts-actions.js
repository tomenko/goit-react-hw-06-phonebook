import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

//согласно требованиям - Шаг 2
export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => ({
    payload: {
      id: nanoid(),
      name,
      number,
    },
  }),
);
    
export const deleteContact = createAction(
    'contacts/deleteContact',
    id => ({
        payload: id,
    })
);
        
export const changeFilter = createAction(
    'contacts/changeFilter',
    value => ({
        payload: value,
    })
);

//согласно требованиям - Шаг 1
/* import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import types from './contacts-types'; */

/* export const addContact = ({name, namber}) => ({
    type: types.ADD,
    payload: {
        id: nanoid(),
        name,
        namber,
    },
});
    
export const deleteContact = id => ({
    type: types.DELETE,
    payload: id,
});
            
            
export const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value,
}); */
            
