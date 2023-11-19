import React from "react"
import ReactDOM from "react-dom/client"
import App from "./pages/App"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from "./theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Layout from "./Layout"
import NotFound from "./pages/NotFound"
import Download from "./pages/Download"

const MainWeb = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/download" element={<Download />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </ChakraProvider>
      <Outlet />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<MainWeb />)
