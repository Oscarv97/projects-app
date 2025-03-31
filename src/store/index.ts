import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "@/slices/projectsSlice";
import timelineReducer from "@/slices/timelineSlice";
import {
  saveTimelineStateToLocalStorage,
  loadTimelineStateFromLocalStorage,
} from "@/utils/storage";

const preloadedTimelineState = loadTimelineStateFromLocalStorage();

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    timeline: timelineReducer,
  },
  preloadedState: {
    timeline: preloadedTimelineState,
  },
});

store.subscribe(() => {
  saveTimelineStateToLocalStorage(store.getState().timeline);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;