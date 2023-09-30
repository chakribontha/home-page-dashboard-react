import { Button, Card, TextField, Typography } from "@mui/material";

function Signin() {
  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Welocime to Corsera Signin below</Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField type="text" label="email" fullWidth={true} />
          <br />
          <br />

          <TextField type="password" label="password" fullWidth={true} />
          <br />
          <br />
          <Button size="large" variant="contained">
            Signin
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
