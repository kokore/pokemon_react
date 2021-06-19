import { IPokemon } from 'types/models/pokemon'

import { Card } from './styled'

type Props = {
	pokemon: IPokemon
}

const PokemonCard = ({ pokemon }: Props) => {
	return (
		<Card>
			<div>
				<img src={pokemon.image || ''} alt={pokemon.name || ''} />
			</div>
		</Card>
	)
}
export default PokemonCard
