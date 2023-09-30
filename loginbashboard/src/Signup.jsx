import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");
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
        <Typography variant="h6">Welocime to Corsera SignUp</Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            label="email"
            fullWidth={true}
          />
          <br />
          <br />

          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            label="password"
            fullWidth={true}
          />
          <br />
          <br />

          <Button
            size="large"
            variant="contained"
            
            onClick={() => {
              function function2(data) {
                console.log(data.token);
                localStorage.setItem("token", data.token);
              }
             function callback1(res){
                res.json().then(function2)
              }
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: email,
                  password: password,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(callback1);
            }}
          >
            Signup
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
