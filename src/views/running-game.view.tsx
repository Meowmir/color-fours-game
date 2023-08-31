import { useParams } from "react-router-dom";
import { useRunningGame } from "../hooks/use-running-game.hook";

export default function RunningGame() {
  const { gameId } = useParams();
  const [theGame, isLoading] = useRunningGame(gameId!);

  console.log(theGame);

  return <h2>It's running!</h2>;
}
