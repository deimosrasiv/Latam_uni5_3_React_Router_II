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
          Contáctanos
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="Nombre"
            name="nombre"
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
            label="Mensage"
            name="mensage"
            multiline
            rows={4}
            value={formState.message}
            onChange={handleInputChange}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
