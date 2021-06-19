import PokemonList from '../pokemonList'
import PokemonSearch from '../pokemonSearch'

import { Container } from './styled'

const PokemonDetail = () => {
	return (
		<Container>
			<PokemonSearch />
			<PokemonList />
		</Container>
	)
}
export default PokemonDetail
