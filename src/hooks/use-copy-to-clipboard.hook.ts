import { useCallback } from "react";
import { CopyFn } from "../my-types";

export function useCopyToClipboard(): CopyFn {
  return useCallback(async (text) => {
    if (!navigator.clipboard) {
      console.warn("Clipboard not supported.");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      return false;
    }
  }, []);
}
