import "../styles/globals.css";
import type { AppProps } from "next/app";
import DefaultTemplate from "../components/DefaultTemplate";
import { Provider } from "react-redux";
import { wrapper } from "../state/";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
    <DefaultTemplate>
      <Component {...pageProps} />
    </DefaultTemplate>
    // </Provider>
  );
}

export default wrapper.withRedux(MyApp);
