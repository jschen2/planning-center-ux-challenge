import { ComponentType, StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DataProvider } from "./hooks/use_data_context"
import { PageLayout } from "./global/PageLayout"
import { Wallet } from "./components/Wallet"
import { Budget } from "./components/Budget"
import { Transactions } from "./components/Transactions"

const ComponentWithPageLayout = ({
  Component,
}: {
  Component: ComponentType
}) => (
  <PageLayout>
    <Component />
  </PageLayout>
)

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element not found")
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ComponentWithPageLayout Component={Wallet} />}
          />
          <Route
            path="/budget"
            element={<ComponentWithPageLayout Component={Budget} />}
          />
          <Route
            path="/transactions"
            element={<ComponentWithPageLayout Component={Transactions} />}
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </StrictMode>
)
