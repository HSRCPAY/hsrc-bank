import { SandboxCards } from "../../constants/card.list";
import { SandboxBinList } from "../../constants/bin.list";
import type { TBin, TSandboxCard } from "../../types";

export class CardValidationRule {
  /**
   * Validates if the given PAN exists in the SandboxCards list.
   * If it doesn't exist, we reject the payment to simulate a sandbox restriction.
   */
  static validateSandboxCard(pan: string): TSandboxCard | null {
    const cleanedPan = pan.replace(/\s+/g, "");
    
    const card = SandboxCards.find((c) => c.pan === cleanedPan);
    return card || null;
  }

  /**
   * Retrieves BIN info based on the first 6 digits of the PAN.
   * Used to attach card metadata during the transaction process.
   */
  static getBinInfo(pan: string): TBin | null {
    const cleanedPan = pan.replace(/\s+/g, "");
    const prefix = cleanedPan.substring(0, 6);

    const bin = SandboxBinList.find((b) => b.prefix === prefix);
    return bin || null;
  }
}
