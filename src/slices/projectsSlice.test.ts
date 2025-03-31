import { describe, it, expect } from "vitest";
import projectsReducer, {
  addProject,
  editProject,
  deleteProject,
  updateProjectOrder,
} from "./projectsSlice";
import { mockProjects } from "@/mocks/data";

const mockInitialState = {
  items: mockProjects,
};

describe("projectsSlice", () => {
  it("should handle initial state", () => {
    const initialState = projectsReducer(undefined, { type: "INIT" });
    expect(initialState.items).toEqual(mockInitialState.items);
  });

  it("should handle addProject", () => {
    const newProject = { name: "Project Gamma", description: "New project" };
    const action = addProject(newProject);
    const state = projectsReducer(mockInitialState, action);

    expect(state.items).toHaveLength(mockInitialState.items.length + 1);
    expect(state.items[state.items.length - 1]).toMatchObject({
      name: "Project Gamma",
      description: "New project",
    });
    expect(state.items[state.items.length - 1].id).toBeDefined();
    expect(state.items[state.items.length - 1].createdDate).toBeDefined();
  });

  it("should handle editProject", () => {
    const action = editProject({ id: "234", newName: "Updated Project Alpha" });
    const state = projectsReducer(mockInitialState, action);

    expect(state.items[0].name).toBe("Updated Project Alpha");
    expect(state.items[1].name).toBe("Project Beta"); 
  });

  it("should handle deleteProject", () => {
    const action = deleteProject("234");
    const state = projectsReducer(mockInitialState, action);

    expect(state.items).toHaveLength(mockInitialState.items.length - 1);
    expect(state.items.find((item) => item.id === "234")).toBeUndefined();
  });

  it("should handle updateProjectOrder", () => {
    const reorderedItems = [
      {
        id: "2234",
        name: "Project Beta",
        description: "This is the second project.",
        createdDate: "2025-03-04T10:00:00Z",
      },
      {
        id: "234",
        name: "Project Alpha",
        description: "This is the first project.",
        createdDate: "2025-03-06T10:00:00Z",
      },
    ];
    const action = updateProjectOrder(reorderedItems);
    const state = projectsReducer(mockInitialState, action);

    expect(state.items).toEqual(reorderedItems);
  });
});