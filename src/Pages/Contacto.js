import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formState);
    setFormState({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h4" component="h1" align="center">
          Contactanos
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="Name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formState.message}
            onChange={handleInputChange}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
