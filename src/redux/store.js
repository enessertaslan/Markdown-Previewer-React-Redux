import {configureStore} from '@reduxjs/toolkit'; // configureStore u import ediyoruz
import {markdownSlice } from './MarkdownSlice';

export const store=configureStore({
    reducer:{
        markdown:markdownSlice,
    },
    
}) 