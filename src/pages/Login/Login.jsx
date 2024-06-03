import React, { useContext } from "react";
import { Box, TextField, Button } from "@mui/material";
import loginBG from "../../assets/loginBG.avif";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate("/dashboard");
        toast.success("Login Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src={loginBG}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Login Background"
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-10">
        <Box
          className="w-11/12 md:w-1/2 lg:w-1/3 p-10 bg-white bg-opacity-20 rounded-3xl"
          sx={{ boxShadow: 3 }}
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextField
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              fullWidth
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "sky blue",
                  },
                },
                width: "100%",
              }}
              {...register("email", { required: true })}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "sky blue",
                  },
                },
                width: "100%",
              }}
              {...register("password", { required: true })}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
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
              Login
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default Login;
