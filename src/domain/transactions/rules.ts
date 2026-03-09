import { Cards } from "../../constants/card.list";
import { BinList } from "../../constants/bin.list";
import type { TBin, TCard } from "../../types";

export class CardValidationRule {
  /**
   * Validates if the given PAN exists in the registered Cards list.
   */
  static validateCard(pan: string): TCard | null {
    const cleanedPan = pan.replace(/\s+/g, "");
    const card = Cards.find((c) => c.pan === cleanedPan);
    return card || null;
  }

  /**
   * Retrieves BIN info based on the first 6 digits of the PAN.
   */
  static getBinInfo(pan: string): TBin | null {
    const cleanedPan = pan.replace(/\s+/g, "");
    const prefix = cleanedPan.substring(0, 6);
    const bin = BinList.find((b) => b.prefix === prefix);
    return bin || null;
  }
}
