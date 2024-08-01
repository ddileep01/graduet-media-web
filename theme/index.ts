import { extendTheme } from '@chakra-ui/react'
import { theme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

import '@fontsource/inter/variable.css'

const colors={
  ...theme.colors,
  _primary: '#8A1A19',
  _secondary: '#d59091'
}
const styles = {
  global: (props: any) => ({
    body: {
      color: 'gray.900',
      bg: 'white',
      fontSize: 'lg',
      _dark: {
        color: 'white',
        bg: 'gray.900',
      },
    },
  }),
}

export default extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    colors,
    styles,
    fontSizes,
    components,
  },
  // theme
)
