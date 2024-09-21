// Time Store
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTimeStore = create(
  persist(
    (set) => ({
      timeZone: "UTC",
      hour12: false,
      setTimezone: (timeZone) => set({ timeZone }),
      toggleHour12: () => set(({ hour12 }) => ({ hour12: !hour12 })),
    }),
    {
      name: "time-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useTimeStore;
