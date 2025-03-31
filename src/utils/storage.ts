import { mockProjects, Project } from "@/mocks/data";
import { Node, Edge } from "reactflow";

export const saveTimelineStateToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("timelineState", serializedState);
  } catch (error) {
    console.error("Failed to save timeline state to local storage:", error);
  }
};

export function loadTimelineStateFromLocalStorage(): { nodes: Node[]; edges: Edge[] } {
  const data = localStorage.getItem("timelineState");
  if (data) {
    const parsed = JSON.parse(data);
    return {
      nodes: parsed.nodes.map((node: any) => ({
        id: node.id,
        position: node.position,
        data: node.data,
        type: node.type || undefined,
      })),
      edges: parsed.edges,
    };
  }
  return { nodes: [], edges: [] };
}

export const loadProjectsFromLocalStorage = (): Project[] => {
  try {
    const serializedState = localStorage.getItem("projects");
    return serializedState ? JSON.parse(serializedState) : mockProjects;
  } catch (error) {
    console.error("Failed to load projects from local storage:", error);
    return [];
  }
};

export const saveProjectsToLocalStorage = (projects: Project[]) => {
  try {
    const serializedState = JSON.stringify(projects);
    localStorage.setItem("projects", serializedState);
  } catch (error) {
    console.error("Failed to save projects to local storage:", error);
  }
};
