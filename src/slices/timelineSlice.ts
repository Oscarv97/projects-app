import { loadTimelineStateFromLocalStorage, saveTimelineStateToLocalStorage } from "@/utils/storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node, Edge } from "reactflow";

interface TimelineState {
  nodes: Node[];
  edges: Edge[];
}

const initialState: TimelineState = loadTimelineStateFromLocalStorage();

const timelineSlice = createSlice({
  name: "timeline",
  initialState,
  reducers: {
    setNodes: (state, action: PayloadAction<Node[]>) => {
      state.nodes = action.payload;
      saveTimelineStateToLocalStorage(state);
    },
    setEdges: (state, action: PayloadAction<Edge[]>) => {
      state.edges = action.payload;
      saveTimelineStateToLocalStorage(state);
    },
    updateNodePosition: (
      state,
      action: PayloadAction<{ id: string; position: { x: number; y: number } }>
    ) => {
      const node = state.nodes.find((n) => n.id === action.payload.id);
      if (node) {
        node.position = action.payload.position;
        saveTimelineStateToLocalStorage(state);
      }
    },
    addNode: (state, action: PayloadAction<{ id: string; label: string }>) => {
        const newNode: Node = {
          id: action.payload.id,
          data: { label: action.payload.label },
          position: { x: state.nodes.length * 200, y: 100 },
          style: {
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            width: "150px",
          },
        };
        state.nodes.push(newNode);
        saveTimelineStateToLocalStorage(state);
      },
  },
});

export const { setNodes, setEdges, updateNodePosition } = timelineSlice.actions;
export default timelineSlice.reducer;