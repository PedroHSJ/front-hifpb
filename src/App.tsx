import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { AppRoutes } from "./routes/routes";
import { AppProvider } from "./hooks";
import "./styles/global-styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <AppRoutes />
          </AppProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
