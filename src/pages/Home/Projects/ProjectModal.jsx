import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaTimes } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#e3f2fd",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const flexContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const ProjectModal = ({ open, handleClose, project }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-details"
    >
      <Box sx={style}>
        <div className="flex justify-between items-center mb-4">
          <Typography id="modal-title" variant="h6" component="h2">
            {project.title}
          </Typography>
          <button onClick={handleClose}>
            <FaTimes />
          </button>
        </div>
        <div style={flexContainer}>
          <img
            src={project.imageSrc}
            alt={project.title}
            className="mb-4 w-full h-auto"
          />
          <Typography id="modal-details" className="text-justify">
            {project.details}
          </Typography>
          <Typography>
            <strong>Technologies:</strong> {project.technologies}
          </Typography>
        </div>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
