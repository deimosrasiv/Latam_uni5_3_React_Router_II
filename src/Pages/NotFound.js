import { Link } from "react-router-dom";
import not404 from "../imagens/Noo404.png";
import Grid from "@mui/material/Grid";

export default function NotFound() {
  return (
    <>
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        sx={{ mt: 10 }}
      >
        <div className="App  ">
          <div className="row">
            <div className="col-sm-5 col-md-6 align-self-center">
              <img
                className="rounded mx-auto d-block"
                src={not404}
                align="center"
              />
            </div>

            <div className="col-sm-5 col-md-6 align-self-center">
              <strong>
                Awww ... No llores. Es sólo un error 404.
                <p></p>
                Lo que buscas puede haber sido desplazado en la memoria a largo
                plazo.{" "}
              </strong>
              <Link to="/">Volver al Home</Link>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}
