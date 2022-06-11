import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import DataProvider from "../components/Todo/DataProvider";

import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <Component {...pageProps} />
        </DataProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
