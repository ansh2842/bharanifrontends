import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import EditIcon from "@mui/icons-material/Edit";

function Tables() {
  const backendUrl = process.env.REACT_APP_BHARANI_BACKEND_URL;

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const [list, setList] = useState({
    username: "",
  });
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchData();

    const queryParams = new URLSearchParams(window.location.search);
    const messageParams = queryParams.get("message");
    if (messageParams) {
      setMessage(messageParams);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, []);

  async function fetchData() {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.get(`${backendUrl}/index/adminget`);
      setData(response.data);
    } catch (err) {
      if (err.response.status == "400") {
        window.location.href = "/authentication/sign-in";
      }
      console.log(err);
    }
  }

  const handleClickOpen = async (id) => {
    setOpen(true);
    setId(id);

    try {
      const response = await axios.get(`${backendUrl}/index/admineditGet/${id}`);
      const data = await response.data;
      setList({
        username: data.name,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (id) => {
    const data = {
      username: list.username,
      password: password,
    };

    try {
      await axios
        .put(`${backendUrl}/index/admineditdata/${id}`, data)
        .then((response) => {
          if (response.status === 200) {
            window.location.href = "/admin?message=Updated%20successfully";
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SoftTypography variant="h6">Admin table</SoftTypography>
      </SoftBox>
      <SoftTypography
        style={{
          opacity: message ? 1 : 0,
          transition: "opacity 0.9s ease-in-out",
          fontSize: "13px",
        }}
        variant="h6"
        color="success"
      >
        {message && decodeURIComponent(message)}
      </SoftTypography>
      <Card>
        <Table striped bordered hover className="table-shadow">
          <thead>
            <tr>
              <th className="text-center" style={{ fontSize: "15px" }}>
                ID
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Name
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="text-center" style={{ fontSize: "15px" }}>
                  {item._id}
                </td>
                <td className="text-center" style={{ fontSize: "15px" }}>
                  {item.name}
                </td>
                <td className="text-center">
                  <Button style={{ fontSize: "15px" }} onClick={() => handleClickOpen(item._id)}>
                    <EditIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <div>
        <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
          <DialogTitle style={{ fontSize: "18px" }}> Edit your Username or Password</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontSize: "15px" }}>Type new username</DialogContentText>
            <p style={{ fontSize: "14px" }}>Username</p>
            <TextField
              autoFocus
              onChange={(e) => setList({ ...list, username: e.target.value })}
              fullWidth
              variant="standard"
              value={list.username}
            />
            <p style={{ fontSize: "14px" }}>Password</p>
            <TextField
              autoFocus
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              variant="standard"
            />{" "}
            <p onChange={(e) => setPassword(e.target.value)} style={{ fontSize: "10px" }}>
              {password}
            </p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleEdit(id)}>Done</Button>
          </DialogActions>
        </Dialog>
      </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
