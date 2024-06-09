import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";

const AllProjects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_backend_api}/projects`)
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  const handleDelete = (projectId) => {
    toast(
      (t) => (
        <span>
          Are you sure you want to delete this project?
          <Button
            color="secondary"
            onClick={() => {
              fetch(
                `${import.meta.env.VITE_backend_api}/projects/${projectId}`,
                {
                  method: "DELETE",
                }
              )
                .then((res) => {
                  if (res.ok) {
                    setProjectData((prevData) =>
                      prevData.filter((project) => project._id !== projectId)
                    );
                    toast.dismiss(t.id);
                    toast.success("Project deleted successfully!");
                  } else {
                    toast.dismiss(t.id);
                    toast.error("Failed to delete project.");
                  }
                })
                .catch(() => {
                  toast.dismiss(t.id);
                  toast.error("An error occurred. Please try again.");
                });
            }}
          >
            Yes
          </Button>
          <Button onClick={() => toast.dismiss(t.id)}>No</Button>
        </span>
      ),
      {
        duration: Infinity,
      }
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl">
        <TableContainer component={Paper} className="mx-auto">
          <Table
            sx={{
              background: "linear-gradient(to right, #e3f2fd, #ede7f6)",
              color: "white",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Delete</TableCell>
                <TableCell align="center">Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projectData.map((project) => (
                <TableRow
                  key={project._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <img
                      src={project.imageSrc}
                      alt=""
                      className="w-10 h-10 object-cover object-top hover:scale-110"
                    />
                  </TableCell>
                  <TableCell align="center">{project.title}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="delete"
                      size="large"
                      color="error"
                      onClick={() => handleDelete(project._id)}
                    >
                      <MdDelete fontSize="large" />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="delete"
                      size="large"
                      color="secondary"
                    >
                      <MdOutlineSystemUpdateAlt fontSize="large" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AllProjects;
