import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import { GetStaticPaths } from "next";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

import confetti from 'canvas-confetti';

import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { PokemonFull } from "../../interfaces/pokemonFull";
import { getPokemonInfo, localFavorites } from "../../utils";
import { PokemonListRes } from "../../interfaces";

interface props {
  pokemon: PokemonFull;
}


        // :(tipo)<loquerecibe en args( id, name )>
const PokemonNamePage: NextPage<props> = ({ pokemon }) => {



  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites( pokemon.id ));



  const onToggleFav = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if(!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        }
      })
    }

  };


  //! esta es una forma de ver que esta o no del lado del servidor o del cliente
  // console.log(typeof window);
  //!__________________________________

  // useEffect(() => {
  //   console.log("useEfect", localStorage.getItem("fav"));
  // }, []);

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>

              <Button onClick={onToggleFav} color="gradient" ghost={!isInFavorites}>
                { isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
              </Button>

            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

//generacion de fomra dinamica d elos posibles agurmentos que puede recivir
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const {data} = await pokeApi.get<PokemonListRes>('/pokemon?limit=151')
  const pokemonsNames: string[] = data.results.map( pokemon => pokemon.name)

  return {
    paths: pokemonsNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name)
    },
  };
};

export default PokemonNamePage;
