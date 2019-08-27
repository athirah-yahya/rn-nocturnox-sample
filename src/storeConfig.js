import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./redux/reducers";
// import rootReducers from "@app-reducers";
// import { persistStore, autoRehydrate } from "redux-persist";
// import immutableTransform from "redux-persist-transform-immutable";
// import { AsyncStorage } from "react-native";

const middleware = applyMiddleware(thunk);
// const store = createStore(rootReducers, compose(middleware, autoRehydrate(), window.devToolsExtension ? window.devToolsExtension() : func => func));
// persistStore(store, {transform: [immutableTransform()], storage: AsyncStorage})
// 	// .purge()
const store = createStore(rootReducers, compose(middleware, window.devToolsExtension ? window.devToolsExtension() : func => func));
// const store = createStore(rootReducers, compose(middleware, window.devToolsExtension ? window.devToolsExtension() : func => func));
// persistStore(store, {transform: [immutableTransform()], storage: AsyncStorage})
  // .purge()

export default store;


