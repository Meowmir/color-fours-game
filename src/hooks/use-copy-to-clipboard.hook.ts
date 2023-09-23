import { useCallback } from "react";
import copy from "copy-to-clipboard";

export function useCopyToClipboard(): (text: string) => Promise<boolean> {
  return useCallback(async (text) => {
    try {
      copy(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      return false;
    }
  }, []);
}
