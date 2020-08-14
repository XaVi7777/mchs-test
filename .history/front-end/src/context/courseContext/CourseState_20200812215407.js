import React, { useReducer } from 'react';
import { courseContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { GET_TODOS, SET_LOADING, CATCH_ERROR } from '../types';
