import React, { FC, ReactNode } from "react";

export interface TileProps {
  tile: null;
  tileIndex: number;
  rowIndex: number;
  key: number;
  hasChip?: boolean;
  children?: ReactNode;
}

const tileStyle = {
  width: "100%",
  height: "100%",
};

export const Tile: FC<TileProps> = ({ children }) => {
  return <div style={{ ...tileStyle }}>{children}</div>;
};
