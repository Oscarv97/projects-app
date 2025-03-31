import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
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
import ProjectTimeline from "./projects/projectsTimeline";

const ProjectsTable: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects.items);
  const dispatch = useDispatch();
  const [items, setItems] = useState(projects);
  const [isTimelineView, setIsTimelineView] = useState(false); 
  useEffect(() => {
    setItems(projects);
  }, [projects]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const resetLocalStorage = () => {
    localStorage.removeItem("projects");
    localStorage.removeItem("timelineState");
    window.location.reload();
  };

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
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsTimelineView(!isTimelineView)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow"
        >
          {isTimelineView ? "Switch to List View" : "Switch to Timeline View"}
        </button>
        <button
          onClick={resetLocalStorage}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 shadow"
        >
          Reset
        </button>
      </div>

      {isTimelineView ? (
        <ProjectTimeline
          items={items}
          onEdit={(id: string, newName: string) => dispatch(editProject({ id, newName }))}
          onDelete={(id: string) => dispatch(deleteProject(id))}
        />
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <div>
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
      )}
    </div>
  );
};

export default ProjectsTable;