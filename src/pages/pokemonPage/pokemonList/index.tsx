import { useState } from 'react'

import { useQuery } from '@apollo/client'

import PokemonCard from '../pokemonCard'
import GET_POKEMON_QUERY from '../query'

const PokemonList = () => {
	const [searchValue, setSearchValue] = useState('bulbasaur')

	const {
		data: { pokemon },
		error,
		loading,
	} = useQuery(GET_POKEMON_QUERY, {
		variables: { name: searchValue },
	})

	// eslint-disable-next-line no-console
	console.log(pokemon)
	// eslint-disable-next-line no-console
	console.log(typeof pokemon)

	return <>{loading ? <>loading</> : <PokemonCard pokemon={pokemon} />}</>
}
export default PokemonList
