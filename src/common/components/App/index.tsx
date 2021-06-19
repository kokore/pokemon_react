import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import client from 'common/qraphql'
import { getGlobalStyle } from 'common/styles'
import theme from 'common/styles/theme'

import Pages from 'pages/index'
const GlobalStyle = getGlobalStyle()
const App = () => (
	<>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<ApolloProvider client={client}>
				<Pages />
			</ApolloProvider>
		</ThemeProvider>
	</>
)

export default App
