import { gql } from '@apollo/client'

export const GET_POKEMON_QUERY = gql`
	query pokemon($name: String!) {
		pokemon(name: $name) {
			id
			number
			name
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
			classification
			types
			resistant
			weaknesses
			fleeRate
			maxCP
			maxHP
			image
			evolutionRequirements {
				amount
				name
			}
			evolutions {
				name
				image
			}
		}
	}
`
export default GET_POKEMON_QUERY
