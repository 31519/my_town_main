import "../styles/globals.css";
import Layout from "../components/Layout";
// import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../components/Theme";
// import Error from "next/error";
import { wrapper} from "../store/store";

function MyApp({ Component, pageProps }) {
  // if (pageProps.error) {
  //   return (
  //     <div>
  //     <Error
  //       statusCode={pageProps.error.statusCode}
  //       title={pageProps.error.message}
  //     />
  //     <h2>Error</h2>
  //     </div>
  //   );
  // }
  return (
    <ThemeProvider theme={Theme}>
      {/* <Provider store={store}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </Provider> */}
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
