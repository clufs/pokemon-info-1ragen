import { Card } from "@nextui-org/react";
import { Router } from "next/router";

interface Props {
  id: number
}

export const FavoriteCardPokemon = ({ id }:Props) => {


  return (
    <Card hoverable clickable css={{ padding: 10 }}>
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        width={"100%"}
        height={140}
      />
    </Card>
  );
};
