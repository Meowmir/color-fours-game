import type { FC } from "react";
import { PlayerChips } from "./player-chips";

export interface PieceProps {
  hasChip: boolean;
}

export const Piece: FC<PieceProps> = ({ hasChip }) =>
  hasChip ? <PlayerChips /> : null;
