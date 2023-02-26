import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../customhook/store/eventSlice";

const store = configureStore({
  reducer: {
    event: eventReducer,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
