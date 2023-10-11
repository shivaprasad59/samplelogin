import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {auth}from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Form() {

 const navigate=useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit=(data)=>{
    console.log(data);
    signInWithEmailAndPassword(auth,data.email,data.password)
    .then((credentials)=>{
      console.log(credentials);
     navigate("/sample")
    })
    .catch((err)=>{
      console.log(err);
      alert("Invalid credentials");
      navigate("/")
      
    })
  }
  const bodyStyle = { paddingTop: "20vh" };

  return (
    <>
      <div style={bodyStyle}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography component="h1" variant="h5">
              SIGN IN
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    margin="dense"
                    {...register("email")}
                    error={errors.email ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.email?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    margin="dense"
                    {...register("password")}
                    error={errors.password ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.password?.message}
                  </Typography>
                </Grid>
                {/* <Grid item xs textAlign="right">
                  Forgot password
                </Grid> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit(onSubmit)}
                >
                  Sign In
                </Button>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}
