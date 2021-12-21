import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "redux/reducers/products";

const reducers = combineReducers({
  products: productsReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof reducers>;

export type AppDispatch = typeof store.dispatch;

export default store;
