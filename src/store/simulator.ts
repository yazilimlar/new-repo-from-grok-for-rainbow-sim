import { create } from "zustand";
import { DEFAULT_INPUTS, PRESETS, STORAGE_KEY, type PresetId } from "@/lib/defaults";
import type { Inputs } from "@/lib/finance";

type State = {
  inputs: Inputs;
  patch: (partial: Partial<Inputs>) => void;
  reset: () => void;
  applyPreset: (id: PresetId) => void;
  hydrate: (inputs: Inputs) => void;
};

export const useSim = create<State>((set) => ({
  inputs: DEFAULT_INPUTS,
  patch: (partial) => set((s) => ({ inputs: { ...s.inputs, ...partial } })),
  reset: () => set({ inputs: { ...DEFAULT_INPUTS } }),
  applyPreset: (id) =>
    set((s) => {
      const preset = PRESETS[id];
      return {
        inputs: {
          ...s.inputs,
          peakOcc: preset.peakOcc,
          shoulderOcc: preset.shoulderOcc,
          lowOcc: preset.lowOcc,
        },
      };
    }),
  hydrate: (inputs) =>
    set({
      inputs: { ...DEFAULT_INPUTS, ...inputs },
    }),
}));

export function persistInputs(inputs: Inputs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  } catch {
    /* ignore quota */
  }
}

export function loadPersistedInputs(): Inputs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Inputs>;
    return { ...DEFAULT_INPUTS, ...parsed };
  } catch {
    return null;
  }
}

export { STORAGE_KEY };
