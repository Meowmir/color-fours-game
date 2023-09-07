import { v4 as uuidv4 } from "uuid";

const PLAYER_ID_KEY = "player_id";
export function getSessionId(): string {
  const existing = localStorage.getItem(PLAYER_ID_KEY);

  if (!existing) {
    localStorage.setItem(PLAYER_ID_KEY, uuidv4());

    return getSessionId();
  }

  return existing;
}
