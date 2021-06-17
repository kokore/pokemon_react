import { ThemeProvider } from 'styled-components'

import { getGlobalStyle } from 'common/styles'
import theme from 'common/styles/theme'

import Pages from 'pages/index'
const GlobalStyle = getGlobalStyle()
const App = () => (
	<>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Pages />
		</ThemeProvider>
	</>
)

export default App
