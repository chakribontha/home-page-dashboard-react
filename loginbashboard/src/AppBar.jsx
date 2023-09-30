import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AppBar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography variant={"h6"}>Coursera</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10, marginTop: 5 }}>
          <Button
            variant="contained"
            onClick={() => {
              navigate('/signup')
            }}
          >
            SignUp
          </Button>
        </div>
        <div style={{ marginRight: 10, marginTop: 5 }}>
          <Button
            variant="contained"
            onClick={() => {
              // window.location = "/signin";
              navigate("/signin");
            }}
          >
            SignIn
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
