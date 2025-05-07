import { SpotType } from '@/actions/spotAction';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RecommendStore {
  selectedValues: string[];
  recommendedPlaces: SpotType[];

  addValue: (value: string) => void;
  removeValue: (value: string) => void;
  setRecommendations: (places: SpotType[]) => void;
  reset: () => void;
}

export const useRecommendStore = create<RecommendStore>()(
  persist(
    (set) => ({
      selectedValues: [],
      //   currentQuestionIndex: 0,
      recommendedPlaces: [],

      addValue: (value) =>
        set((state) => ({
          selectedValues: [...state.selectedValues, value],
        })),

      removeValue: (value) =>
        set((state) => ({
          selectedValues: state.selectedValues.filter((v) => v !== value),
        })),

      //   nextQuestion: () =>
      //     set((state) => ({
      //       currentQuestionIndex: state.currentQuestionIndex + 1,
      //     })),

      setRecommendations: (places) =>
        set(() => ({
          recommendedPlaces: places,
        })),

      reset: () =>
        set(() => ({
          selectedValues: [],
          currentQuestionIndex: 0,
          recommendedPlaces: [],
        })),
    }),
    { name: 'recommend-store' }
  )
);
