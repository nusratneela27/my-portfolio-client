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
import { MdDelete } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";

const AllProjects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

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
                    <IconButton aria-label="delete" size="large" color="error">
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
