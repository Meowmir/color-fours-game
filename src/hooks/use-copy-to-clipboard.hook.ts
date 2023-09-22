import { useCallback } from "react";
import copy from "copy-to-clipboard";
import { CopyFn } from "../my-types";

export function useCopyToClipboard(): CopyFn {
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
