import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { editProject, deleteProject, updateProjectOrder } from "@/slices/projectsSlice";
import ProjectItem from "./projects/projectItem";

const ProjectsTable: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects.items);
  const dispatch = useDispatch();
  const [items, setItems] = useState(projects);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
  
    if (!over || active.id === over.id) return;
  
    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);
  
    const reorderedItems = arrayMove(items, oldIndex, newIndex);
    setItems(reorderedItems);
  
    dispatch(updateProjectOrder(reorderedItems));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="space-y-4">
          {items.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              name={project.name}
              createdDate={project.createdDate}
              onEdit={(id, newName) => dispatch(editProject({ id, newName }))}
              onDelete={(id) => dispatch(deleteProject(id))}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ProjectsTable;
