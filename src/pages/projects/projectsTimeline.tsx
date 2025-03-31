import React, { useEffect } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
} from "reactflow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setNodes as setReduxNodes, setEdges as SetReduxEdges, updateNodePosition } from "@/slices/timelineSlice";
import "reactflow/dist/style.css";

interface ProjectTimelineProps {
  items: { id: string; name: string; createdDate: string }[];
  onEdit: (id: string, newName: string) => void;
  onDelete: (id: string) => void;
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({
  items,
  onEdit,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const { nodes: reduxNodes, edges: reduxEdges } = useSelector(
    (state: RootState) => state.timeline
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(
    reduxNodes.length > 0
      ? reduxNodes
      : items.map((project, index) => ({
          id: project.id,
          data: { label: project.name },
          position: { x: index * 200, y: 100 },
          style: {
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            width: "150px",
          },
        }))
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(reduxEdges);

  
  useEffect(() => {
    if (reduxNodes.length === 0 && items.length > 0) {
      const initialNodes: Node[] = items.map((project, index) => ({
        id: project.id,
        data: { label: project.name },
        position: { x: index * 200, y: 100 },
        style: {
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          width: "150px",
        },
      }));
      setNodes(initialNodes); 
      dispatch(setReduxNodes(initialNodes)); 
    }
  }, [items, reduxNodes, dispatch, setNodes]);

  const onConnect = (params: Edge | Connection) => {
    const newEdges = addEdge(params, edges);
    setEdges(newEdges);
    dispatch(SetReduxEdges(newEdges));
  };

  const onNodeDragStop = (_: any, node: Node) => {
    dispatch(updateNodePosition({ id: node.id, position: node.position }));
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      
      <div className="bg-yellow-200 text-yellow-800 text-sm p-2 text-center">
        <strong>Warning:</strong> This is a proof of concept. Data may desynchronize from the projects view. Add projects first.
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        fitView
      >
        <Background color="#aaa" gap={16} />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default ProjectTimeline;