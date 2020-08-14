import React, { useReducer } from 'react';
import { courseContext } from './courseContext';
import { courseReducer } from './courseReducer';
import { } from '../types';

export const ToDoState = ({ children }) => {
  const initialState = {
    todo: {
      id: '',
      title: '',
    },
    todos: [],
    loading: false,
    errorMessage: ''
  }

  const API_URL = 'https://test.megapolis-it.ru/api/list';
  const [state, dispatch] = useReducer(todoReducer, initialState);
