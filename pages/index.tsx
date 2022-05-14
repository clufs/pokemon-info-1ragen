import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { PokemonListRes, SmallPokemon } from '../interfaces/pokemon-list';
import { PokemonCard } from './../components/pokemon/PokemonCard';

interface props {
  pokemons: SmallPokemon[]
}

// props: son las interfaces que van a tener ,en este caso, {pokemons}
const HomePage: NextPage <props> = ({pokemons}) => {

  return (
    <Layout title='Listado de Pokemons'>
      <PokemonCard pokemons={pokemons}/>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListRes>('/pokemon?limit=151');

  const pokemons:SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
  }))


  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
  