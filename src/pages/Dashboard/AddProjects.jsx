import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

const AddProjects = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Box
        className="w-11/12 md:w-1/2 lg:w-1/3 p-10 rounded-3xl mt-16"
        sx={{
          boxShadow: 3,
          background: "linear-gradient(to right, #e3f2fd, #ede7f6)",
          color: "white",
        }}
      >
        <p className="text-gray-600 text-xl lg:text-3xl">Add Project</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            variant="standard"
            margin="normal"
            label="Image URL"
            {...register("Image URL", { required: true })}
          />
          <TextField
            fullWidth
            variant="standard"
            margin="normal"
            label="Title"
            {...register("Title", { required: true })}
          />
          <TextField
            fullWidth
            variant="standard"
            margin="normal"
            label="Description"
            multiline
            rows={3}
            {...register("Description", { required: true })}
          />
          <TextField
            fullWidth
            variant="standard"
            margin="normal"
            label="Details"
            multiline
            rows={3}
            {...register("details", { required: true })}
          />
          <TextField
            fullWidth
            variant="standard"
            margin="normal"
            label="Technologies"
            {...register("technologies", { required: true })}
          />
          <TextField
            fullWidth
            variant="standard"
            margin="normal"
            label="GitHub Link"
            {...register("githublink", { required: true })}
          />
          <TextField
            fullWidth
            variant="standard"
            margin="normal"
            label="Live Site Link"
            name="livesitelink"
            {...register("livesitelink", { required: true })}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              py: 1.5,
              background: "linear-gradient(to right, #64b5f6, #ba68c8)",
              color: "white",
              "&:hover": {
                background: "linear-gradient(to right, #ba68c8, #64b5f6)",
                color: "white",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AddProjects;
