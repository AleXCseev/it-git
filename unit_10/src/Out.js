import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectValue,
    selectTest
} from './app/taskReducerSlice';

export default function Out() {
    const task1 = useSelector(selectValue);
    const task2 = useSelector(selectTest); // получаем данные из store
    const dispatch = useDispatch();

    return (
        <div>
            <hr/>
            <h2>Task 1</h2>
            <p>{task1}</p>
            <p>{task2}</p>
        </div>
    );
}