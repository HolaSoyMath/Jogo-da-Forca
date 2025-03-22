import { useGameStats } from "../../../hooks/useGameStats";
import { Button } from "../ui/button";

export default function ResetGame () {

  const { resetGame } = useGameStats()

  return(
    <Button onClick={() => resetGame()} className="cursor-pointer">
      Jogar novamente
    </Button>
  )
}