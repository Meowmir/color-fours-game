export type Game = {
  state: string;
  gameId: string;
  turn: number;
  gameBoard: (ReadTileDTO | null)[][];
  players: ReadPlayerDTO[];
  isP1?: boolean;
};

export type ReadTileDTO = {
  color: string;
  playerName: string;
};

export type ReadPlayerDTO = {
  name: string;
};

export const ItemType = {
  Chip: "chip",
};
