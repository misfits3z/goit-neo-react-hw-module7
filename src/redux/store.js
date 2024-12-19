import { configureStore } from '@reduxjs/toolkit';

// Приклад slice (можна додати більше пізніше)
import exampleSlice from './exampleSlice';

const store = configureStore({
    reducer: {
        example: exampleSlice, // Додайте сюди інші ред'юсери
    },
});

export default store;