import React, { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  CheckOutlined,
  DragOutlined,
} from "@ant-design/icons";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ProjectRowProps {
  id: string;
  name: string;
  description?: string;
  createdDate: string;
  onEdit: (id: string, newName: string) => void;
  onDelete: (id: string) => void;
}

const ProjectItem: React.FC<ProjectRowProps> = ({
  id,
  name,
  createdDate,
  onEdit,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleSave = () => {
    onEdit(id, editedName);
    setIsEditing(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between p-4 border-t border-b border-gray-300 bg-white hover:border hover:border-black"
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab flex items-center pr-4 py-2"
      >
        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
          <DragOutlined className="text-gray-600" />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            {isEditing ? (
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 w-full max-w-[150px] sm:max-w-[200px]"
              />
            ) : (
              <h3 className="font-semibold text-gray-800">{name}</h3>
            )}
          </div>
        </div>

        <span className="text-sm text-gray-400 text-center">
          {new Date(createdDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          })}
          ,{" "}
          {new Date(createdDate).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>

       
        <div className="flex items-center space-x-4">
          <button
            className="text-blue-500 hover:text-blue-600"
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            aria-label={isEditing ? "Save" : "Edit"}
          >
            {isEditing ? (
              <CheckOutlined />
            ) : (
              <EditOutlined className="text-gray-800" />
            )}
          </button>
          <button
            className="text-red-500 hover:text-red-600"
            onClick={() => onDelete(id)}
            aria-label="Delete"
          >
            <DeleteOutlined className="text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;