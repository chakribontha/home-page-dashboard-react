import { Button, TextField, Card } from "@mui/material";
import { useState } from "react";
function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: 400, padding: 20 }}>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          label="title"
          fullWidth={true}
        />
        <br />
        <br />

        <TextField
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="password"
          label="description"
          fullWidth={true}
        />
        <br />
        <br />

      <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                      fetch("http://localhost:3000/admin/courses", {
                        method: "POST",
                        body: JSON.stringify({
                          title: title,
                          description: description,
                          // imageLink="",
                          published: true,
                        }),
                        headers: {
                          "Content-Type": "application/json",
                          Authorization:
                            "Bearer " + localStorage.getItem("token"),
                        },
                      });
                   }}
              >
          Add Courses
        </Button>
      </Card>
    </div>
  );
}

export default AddCourse;
