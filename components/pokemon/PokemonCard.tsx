

import { Card, Grid, Row, Text } from '@nextui-org/react'
import React, { FC } from 'react'
import { SmallPokemon } from '../../interfaces'
import { useRouter } from 'next/router';

interface props {
  pokemons: SmallPokemon[]
}

export const PokemonCard:FC <props> = ({pokemons}) => {

  const router = useRouter()

  const onClick = (id:number) => {
    router.push(`/pokemon/${id}`)
    console.log({id});
  }
  

  return (
    <>
    <Grid.Container gap={2} justify='flex-start' >
      {
        pokemons.map(({id, name, img}) => (
          <Grid xs={6} sm={3} md={2} xl={1}key={id}>
            <Card hoverable clickable onClick={e => onClick(id)}>
              <Card.Body css={{p:1}}>
                <Card.Image src={img} width="100%" height={140}/>
              </Card.Body>
              <Card.Footer>
                <Row justify='space-between'>
                  <Text transform='capitalize'>{name}</Text>
                  <Text>{id}</Text>
                </Row>
            </Card.Footer>
            </Card>
          </Grid>
        ))
      }
    </Grid.Container>
  </>

  )
}


