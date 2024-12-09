import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
//per importare il file bast ../reducers senza index.js, per questo 
//chiamiamo tutti i file index.js

const store = configureStore({ reducer: mainReducer });

export default store;
