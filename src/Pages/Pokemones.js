import { useEffect, useState } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import logo from "../imagens/logo.png";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";



export default function Pokemones() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => setPokemonList(response.data.results))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    if (selectedPokemon) {
      axios
        .get(selectedPokemon.url)
        .then((response) => setPokemonDetails(response.data))
        .catch((error) => console.error(error));
    }
  }, [selectedPokemon]);

  const handleSelectPokemon = (event, value) => {
    setSelectedPokemon(value);
  };

  return (
    <>
      <header className="App-header-login">
        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10%",
            //   height: "100vh",
          }}
        >
          <Card
            sx={{
              maxWidth: 1600,
              minWidth: 300,
              borderRadius: 5,
              boxShadow: 20,
            }}
          >
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              sx={{ mt: 3 }}
            >
              <Grid item xs={12} sm={6} md={4}>
                <img height={50} src={logo} alt="imagen" />
              </Grid>
            </Grid>

            <CardContent>
              <Typography
                variant="h5"
                component="h1"
                gutterBottom
                textAlign="center"
              >
                Selecciona un Pokemon
              </Typography>

              <Box>
                <Autocomplete
                  options={pokemonList}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Pokemon . . "
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  onChange={handleSelectPokemon}
                />

                <Grid style={{ display: "flex", alignItems: "center" }}>
                  <Grid item xs={12}></Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Container>

        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "2%",
            minWidth: 900,
            //  height: "100vh",
          }}
        >
          {pokemonDetails && (
            <>
              <div>
                <Grid
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  sx={{ mt: 3 }}
                >
                  <Grid container item xs={12} sm={6} md={4}>
                    <img
                      src={
                        pokemonDetails.sprites.other.dream_world.front_default
                      }
                      alt={pokemonDetails.name}
                    />
                    <Typography
                      variant="h3"
                      component="h1"
                      gutterBottom
                      textAlign="center"
                    >
                      {pokemonDetails.name}
                    </Typography>
                  </Grid>
                  <Grid container item xs={12} sm={6} md={4}></Grid>

                  <Grid item xs={12} sm={6} md={4}>

                    <Typography textAlign="center">
                      Tipo de Pokemon: {pokemonDetails.types[0].type.name}
                    </Typography>

                    <Typography textAlign="center">
                      Altura: {pokemonDetails.height}
                    </Typography>

                    <Typography textAlign="center">
                      Peso: {pokemonDetails.weight}
                    </Typography>

                    <Typography textAlign="center">
                      HP: {pokemonDetails.stats[0].base_stat}
                    </Typography>

                    <Typography textAlign="center">
                      Ataque: {pokemonDetails.stats[1].base_stat}
                    </Typography>

                    <Typography textAlign="center">
                      Defensa: {pokemonDetails.stats[2].base_stat}
                    </Typography>

                    <Typography textAlign="center">
                      Ataque Especial: {pokemonDetails.stats[3].base_stat}
                    </Typography>

                    <Typography textAlign="center">
                      Defensa Especial: {pokemonDetails.stats[4].base_stat}
                    </Typography>

                    <Typography textAlign="center">
                      Velocidad: {pokemonDetails.stats[4].base_stat}
                    </Typography>

                    <Typography textAlign="center">
                      <strong>Habilidades:</strong>
                    </Typography>
                    <ul>
                      {pokemonDetails.abilities.map((ability, index) => (
                        <li key={index}>{ability.ability.name}</li>
                      ))}
                    </ul>
                  </Grid>
                </Grid>
              </div>
            </>
          )}
        </Container>
      </header>
    </>
  );
}
