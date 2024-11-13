// import React from "react";
// import { TextField, Button, Grid, Typography, Container, FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as yup from "yup";
// import toast from "react-hot-toast";
// import { Box } from "@mui/system";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import FormControlLabel from '@mui/material/FormControlLabel';


// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// const theme = createTheme();

// function SignUpForm() {
//   const Navigate = useNavigate();

//   const initialValues = {
//     username: "",
//     email: "",
//     password: "",
//     gender:"",
//     age:"",
//   location:"",
//   phone:"",


//   };
//   const validationSchema = yup.object({
//     username: yup.string().required("Username must be required"),
//     email: yup.string().email("Invalid email!").required("Email must be required"),
//     password: yup
//       .string()
//       .required("Password must be required")
//       .min(8, "Password must be greater than 8 characters"),
//     gender: yup.string().required("Gender is required"),
//     age: yup.string().required("Age is required"),
//     location: yup.string().required("Location is required"),
//     phone: yup.string().required("Phone is required"),
//   });
  

//   const onSubmit = async (values) => {
//     console.log(values)
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/signup",

//         values
//       );

//       console.log(response);

//       Navigate("/login");
//     } catch (error) {
//       if (
//         error.response &&
//         error.response.data &&
//         error.response.data.message
//       ) {
//         toast.error(error.response.data.message);
//       } else {
//         toast.error("An error occurred during signup.");
//       }
//     }
//   };
//   return (
//     <ThemeProvider theme={theme}>
//       <Container
//        component="main" maxWidth="sm"
//       >

// <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             boxShadow: 3,
//             borderRadius: 2,
//           px: 4,
//           py: 6,
//           }}
//         >
//         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//         <Formik
//           validationSchema={validationSchema}
//           initialValues={initialValues}
//           onSubmit={onSubmit}
//         >
//           <Form>
//             <Grid container spacing={2}>
//               <Grid item xs={12} >
//                 <Field
//                   as={TextField}
//                   type="text"
//                   label="Username"
//                   variant="outlined"
//                   name="username"
//                   fullWidth
//                 />
//                 <Box sx={{ color: "red" }}>

//                 <ErrorMessage name="username" />
//                 </Box>
//               </Grid>
//               <Grid item xs={12}>
//                 <Field
//                   as={TextField}
//                   type="email"
//                   label="Email"
//                   variant="outlined"
//                   name="email"
//                   fullWidth
//                 />
//                 <Box sx={{ color: "red" }}>

//                 <ErrorMessage name="email" />
//                 </Box>
//               </Grid>
//               <Grid item xs={12}>
//                 <Field
//                   as={TextField}
//                   type="password"
//                   label="Password"
//                   variant="outlined"
//                   name="password"
//                   fullWidth
//                 />
//                 <Box sx={{ color: "red" }}>
//                 <ErrorMessage name="password" />
//                 </Box>
//               </Grid>

//               <Grid item xs={12}>
//             <FormControl component="fieldset">
//               <FormLabel id="gender-label">Gender</FormLabel>
              
              
//                   <Field 
//                   name="gender"
//                   as={RadioGroup}
//                     row
//                     aria-labelledby="gender-label"
                    
//                   >
//                     <FormControlLabel value="female" control={<Radio />} label="Female" />
//                     <FormControlLabel value="male" control={<Radio />} label="Male" />
//                     <FormControlLabel value="other" control={<Radio />} label="Other" />
//                   </Field>
               
            
//             </FormControl>

//             <Box sx={{ color: "red" }}>
//                 <ErrorMessage name="sex" />
//                 </Box>

//           </Grid>

//           <Grid item xs={12}>
//                 <Field
//                   as={TextField}
//                   type="text"
//                   label="age"
//                   variant="outlined"
//                   name="age"
//                   fullWidth
//                 />
//                 <Box sx={{ color: "red" }}>
//                 <ErrorMessage name="age" />
//                 </Box>
//               </Grid>

//               <Grid item xs={12}>
//                 <Field
//                   as={TextField}
//                   type="text"
//                   label="location"
//                   variant="outlined"
//                   name="location"
//                   fullWidth
//                 />
//                 <Box sx={{ color: "red" }}>
//                 <ErrorMessage name="location" />
//                 </Box>
//               </Grid>
//               <Grid item xs={12}>
//                 <Field
//                   as={TextField}
//                   type="text"
//                   label="phone"
//                   variant="outlined"
//                   name="phone"
//                   fullWidth
//                 />
//                 <Box sx={{ color: "red" }}>
//                 <ErrorMessage name="phone" />
//                 </Box>
//               </Grid>




//               <Grid item xs={12}>
//                <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>

           
//               </Grid>
//             </Grid>
//           </Form>
//         </Formik>

// </Box>
//       </Container>
//       </ThemeProvider>
//   );
// }

// export default SignUpForm;







import React from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
  Avatar,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const theme = createTheme();

function SignUpForm() {
  const Navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    location: "",
    phone: "",
  };

  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    gender: yup.string().required("Gender is required"),
    age: yup
      .number()
      .required("Age is required")
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
      .min(1, "Age must be at least 1")
      .max(100, "Age cannot exceed 100"),
    location: yup
      .string()
      .required("Location is required")
      .min(3, "Location must be at least 3 characters"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const response = await axios.post("http://localhost:8080/signup", values);
      console.log(response);
      toast.success("Signup successful!");
      Navigate("/login");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during signup.");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      type="text"
                      label="Username"
                      name="username"
                      fullWidth
                      autoComplete="username"
                      variant="outlined"
                    />
                    <Box sx={{ color: "red" }}>
                      <ErrorMessage name="username" />
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      type="email"
                      label="Email"
                      name="email"
                      fullWidth
                      autoComplete="email"
                      variant="outlined"
                    />
                    <Box sx={{ color: "red" }}>
                      <ErrorMessage name="email" />
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      type="password"
                      label="Password"
                      name="password"
                      fullWidth
                      autoComplete="new-password"
                      variant="outlined"
                    />
                    <Box sx={{ color: "red" }}>
                      <ErrorMessage name="password" />
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel id="gender-label">Gender</FormLabel>
                      <Field as={RadioGroup} row name="gender">
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                      </Field>
                      <Box sx={{ color: "red" }}>
                        <ErrorMessage name="gender" />
                      </Box>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      type="number"
                      label="Age"
                      name="age"
                      fullWidth
                      variant="outlined"
                    />
                    <Box sx={{ color: "red" }}>
                      <ErrorMessage name="age" />
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      type="text"
                      label="Location"
                      name="location"
                      fullWidth
                      variant="outlined"
                    />
                    <Box sx={{ color: "red" }}>
                      <ErrorMessage name="location" />
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      type="text"
                      label="Phone"
                      name="phone"
                      fullWidth
                      variant="outlined"
                    />
                    <Box sx={{ color: "red" }}>
                      <ErrorMessage name="phone" />
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Signing Up..." : "Sign Up"}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUpForm;
