import { describe, it, expect, vi, beforeEach } from "vitest";
import timelineReducer, {
  setNodes,
  setEdges,
  updateNodePosition,
} from "./timelineSlice";
import { Node, Edge } from "reactflow";
import * as storageUtils from "@/utils/storage"; 

describe("timelineSlice", () => {
  const initialState = {
    nodes: [],
    edges: [],
  };

  beforeEach(() => {
    vi.spyOn(storageUtils, "loadTimelineStateFromLocalStorage").mockReturnValue(initialState);
    vi.spyOn(storageUtils, "saveTimelineStateToLocalStorage").mockImplementation(() => {});
  });


  it("should handle setNodes", () => {
    const nodes: Node[] = [
      { id: "1", data: { label: "Node 1" }, position: { x: 0, y: 0 } },
      { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
    ];
    const action = setNodes(nodes);
    const state = timelineReducer(initialState, action);
    expect(state.nodes).toEqual(nodes);
  });

  it("should handle setEdges", () => {
    const edges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];
    const action = setEdges(edges);
    const state = timelineReducer(initialState, action);
    expect(state.edges).toEqual(edges);
  });

  it("should handle updateNodePosition", () => {
    const initialNodes: Node[] = [
      { id: "1", data: { label: "Node 1" }, position: { x: 0, y: 0 } },
      { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
    ];
    const initialStateWithNodes = { ...initialState, nodes: initialNodes };

    const action = updateNodePosition({
      id: "1",
      position: { x: 50, y: 50 },
    });
    const state = timelineReducer(initialStateWithNodes, action);

    expect(state.nodes[0].position).toEqual({ x: 50, y: 50 });
    expect(state.nodes[1].position).toEqual({ x: 100, y: 100 });
  });
});