import loadable from '@loadable/component'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import routes from './routes'

const PokemonComponent = loadable(() => import('pages/pokemonPage'))

const Pages = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={routes.root} component={PokemonComponent} />
				<Route exact path={routes.pokemon} component={PokemonComponent} />
			</Switch>
		</BrowserRouter>
	)
}
export default Pages
