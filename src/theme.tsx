/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
import {
  type ThemeConfig,
  extendTheme,
  StyleFunctionProps,
} from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}
const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => {
      body: {
        bg: mode("#ffffff9a", "#ade1f1")(props)
      }
    },
  },
})
// Phan Huy Khánh 1C
export default theme
