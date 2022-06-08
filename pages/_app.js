import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import DataProvider from "../components/Todo/DataProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </ChakraProvider>
  );
}

export default MyApp;
