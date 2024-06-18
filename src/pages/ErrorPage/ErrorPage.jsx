import { Button } from "@mui/material";
import error from "../../assets/error.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={error} height={1200} width={1200} alt="error" />
      <Button
        variant="contained"
        sx={{
          mt: 2,
          py: 1.5,
          background: "linear-gradient(to right, #bdbdbd, #212121)",
          color: "white",
          "&:hover": {
            background: "linear-gradient(to right, #212121, #bdbdbd)",
            color: "white",
          },
        }}
      >
        <Link to="/">Back To home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
