import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import DataProvider from "../components/Todo/DataProvider";
import { ReactQueryDevtools } from "react-query/devtools";

import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        {/* <DataProvider> */}
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
        {/* </DataProvider> */}
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
