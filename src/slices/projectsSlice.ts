import { loadProjectsFromLocalStorage, saveProjectsToLocalStorage } from "@/utils/storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Project {
  id: string;
  name: string;
  description?: string;
  createdDate: string;
}

interface ProjectsState {
  items: Project[];
}

const initialState: ProjectsState = {
  items: loadProjectsFromLocalStorage(),
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Omit<Project, "id" | "createdDate">>) => {
      const newProject = {
        ...action.payload,
        id: uuidv4(),
        createdDate: new Date().toISOString(),
      };
      state.items.push(newProject);
      saveProjectsToLocalStorage(state.items); 
    },
    editProject: (state, action: PayloadAction<{ id: string; newName: string }>) => {
      const { id, newName } = action.payload;
      const project = state.items.find((item) => item.id === id);
      if (project) {
        project.name = newName;
        saveProjectsToLocalStorage(state.items); 
      }
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveProjectsToLocalStorage(state.items); 
    },
    updateProjectOrder: (state, action: PayloadAction<Project[]>) => {
      state.items = action.payload.map((project) => ({
        ...project,
        createdDate:
          typeof project.createdDate === "string"
            ? project.createdDate
            : new Date(project.createdDate).toISOString(),
      }));
      saveProjectsToLocalStorage(state.items);
    },
  },
});

export const { addProject, editProject, deleteProject, updateProjectOrder } =
  projectsSlice.actions;
export default projectsSlice.reducer;