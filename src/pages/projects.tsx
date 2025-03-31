import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import ProjectItem from "./projects/projectItem";
import { deleteProject, editProject } from "@/slices/projectsSlice";

const ProjectsTable: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects.items);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteProject(id));
  };
  const handleEdit = (id: string, newName: string) => {
    dispatch(editProject({ id: id.toString(), newName }));
  };

  return (
    <div className="overflow-x-auto px-4">
      <div className=" mx-auto">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            name={project.name}
            createdDate={project.createdDate}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsTable;
