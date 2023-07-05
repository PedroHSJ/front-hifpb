import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { AppRoutes } from "./routes/routes";
import { AppProvider } from "./hooks";
import "./styles/global-styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <ToastContainer position="top-right" />

            <AppRoutes />
          </AppProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
