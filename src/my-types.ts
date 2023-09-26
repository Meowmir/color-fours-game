export type Game = {
  state: string;
  gameId: string;
  turn: number;
  gameBoard: (ReadTileDTO | null)[][];
  players: ReadPlayerDTO[];
  isP1?: boolean;
  latestTile?: LatestTileDTO | null;
};

export type PlaceTileDTO = {
  color: string;
  row: number;
  column: number;
};

export type ReadTileDTO = {
  color: string;
  playerName: string;
  isP1: boolean;
};

export type ReadPlayerDTO = {
  name: string;

  placeableTiles: string[];
};

export const ItemType = {
  Chip: "chip",
};

export type LatestTileDTO = {
  column: number;
  row: number;
  isP1: boolean;
};
