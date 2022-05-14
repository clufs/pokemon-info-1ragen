import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "../ui/FavoriteCardPokemon";
import { useRouter } from 'next/router';

interface props {
  pokemons: number[];
  // nomber:  string;
}



export const FavoritePokemons = ({pokemons}: props):JSX.Element => {

  const router = useRouter()

  const favoriteClickPokemon = (id:number) => {
    router.push(`/pokemon/${id}`)
    console.log({id});
  }

  return (
      <Grid.Container gap={2} direction="row" justify="center" >
        {pokemons.map((id: number) => (
          <Grid xs={6} sm={3} xl={1} key={id} onClick={ () => favoriteClickPokemon(id) }>
            <FavoriteCardPokemon id={id}/>
          </Grid>
        ))}
      </Grid.Container>
  );
};
