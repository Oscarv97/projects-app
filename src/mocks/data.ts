export interface Project {
  id: string;
  name: string;
  description?: string;
  createdDate: string;
}

export const mockProjects: Project[] = [
  {
    id: "234",
    name: "Project Alpha",
    description: "This is the first project.",
    createdDate: "2025-03-06T10:00:00Z",
  },
  {
    id: "2234",
    name: "Project Beta",
    description: "This is the second project.",
    createdDate: "2025-03-04T10:00:00Z",
  },
  {
    id: "345",
    name: "Project Gamma",
    description: "This is the third project.",
    createdDate: "2025-03-21T10:00:00Z",
  },
  {
    id: "456",
    name: "Project Delta",
    description: "This is the fourth project.",
    createdDate: "2025-03-17T10:00:00Z",
  },
];
