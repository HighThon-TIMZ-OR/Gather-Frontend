import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/common/header/Index";
import PageTemplate from "./components/common/pageTemplate/pageTemplate";
import { ACCESS_KEY } from "./constants/token/token";
import Router from "./router/router";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            {ACCESS_KEY ? <Header /> : null}
            <PageTemplate>
              <Router />
            </PageTemplate>
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
