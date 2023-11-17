import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
interface GameCardProps {
  games: Game;
}
const GameCard = ({ games }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={games.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
