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
import { Editor } from "@tinymce/tinymce-react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Carousel() {
  const backendUrl = process.env.REACT_APP_BHARANI_BACKEND_URL;
  const tinymceUrl = process.env.REACT_APP_TINYMCE_APP;
  const [image, setImage] = useState("");
  const [text, setText] = useState(" ");
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [opend,setOpend] = useState(false);
  const [message, setMessage] = useState("");
  const [list, setList] = useState({
    image: "",
    text: "",
  });

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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpens = async (id) => {
    setId(id);
    setOpens(true);
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    try {
      const response = await axios.get(`${backendUrl}/index/editcaruosel/${id}`);
      const data = await response.data;
      setList({
        text: data.text,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleClose2 = () => {
    setOpens(false);
  };

  const handleOpenDelete =(id)=>{
    setId(id);
    setOpend(true);
  }
  const handleCloseDelete =()=>{
    setOpend(false);
  }

  const editorConfig = {
    // ... (other config options)
    apiKey: tinymceUrl,
    plugins: ["lists", "code"],
    toolbar: "bullist numlist code",
    menu: { tools: { title: "Tools", items: "listprops" } },
  };

  const handleAdd = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("text", text);

    try {
      axios
        .post(`${backendUrl}/index/addcarousel`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            window.location = "/carousel?message=Carousel%20Added%20successfully";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.get(`${backendUrl}/index/getcarousel`);
      const data = await response.data;
      setData(data);
    } catch (err) {
      if (err.response.status == "400") {
        window.location.href = "/authentication/sign-in";
      }
      console.log(err);
    }
  };

  const handleEdit = async () => {
    console.log(list.text);
    const formData = new FormData();

    formData.append("image", list.image);
    formData.append("text", list.text);

    try {
      await axios
        .put(`${backendUrl}/index/carouselEdit/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.status === 200) {
            window.location.href = `/carousel?message=Carousel%20updated%20successfully`;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete =async()=>{

    try{
      if(id){
        await axios.delete(`${backendUrl}/index/carouselDelete/${id}`);
        setData(data.filter(item => item._id !== id))
        window.location.href = `/carousel?message=Carousel%20Deleted%20successfully`;
      }
      
    }catch (err){
      console.log(err);
    }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox display="flex" justifyContent="space-between" alignItems="space-between" p={3}>
        <SoftTypography variant="h6">Carousel table</SoftTypography>
        <Button style={{ fontSize: "15px" }} onClick={() => handleClickOpen()}>
          Add Carousel
        </Button>
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
                Image
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Text
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                   
                    <td className="text-center" style={{ fontSize: "15px" }}>
                      <img style={{ width: "60px" }} src={`${backendUrl}/uploads/${item.image}`} />
                    </td>
                    <td
                      dangerouslySetInnerHTML={{ __html: item.text }}
                      className="text"
                      style={{ fontSize: "15px" }}
                    ></td>
                    <td className="text-center">
                      <Button
                        onClick={() => handleClickOpens(item._id)}
                        style={{ fontSize: "15px" }}
                      >
                        <EditIcon />
                      </Button>
                      <Button style={{ fontSize: "15px" }}>
                        <DeleteIcon onClick={()=>handleOpenDelete(item._id)}  style={{ color: "red" }} />
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Card>
      <div>
        <Dialog maxWidth="sm" fullWidth open={open}>
          <DialogTitle style={{ fontSize: "18px" }}> Add Carousel Details</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontSize: "15px" }}>Add Carousel</DialogContentText>
            <p style={{ fontSize: "14px" }}>Image</p>
            <TextField
              autoFocus
              type="file"
              fullWidth
              variant="standard"
              onChange={(e) => setImage(e.target.files[0])}
              accept="jpeg,jpg,png"
            />
            <p style={{ fontSize: "14px" }}>Text</p>
            <Editor
              apiKey={tinymceUrl}
              init={editorConfig}
              autoFocus
              fullWidth
              variant="standard"
              onEditorChange={(context) => setText(context)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()}>Cancel</Button>
            <Button onClick={() => handleAdd()}>Done</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog maxWidth="sm" fullWidth open={opens}>
          <DialogTitle style={{ fontSize: "18px" }}> Edit Carousel Details</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontSize: "15px" }}>Edit Carousel</DialogContentText>
            <p style={{ fontSize: "14px" }}>Image</p>
            <TextField
              autoFocus
              type="file"
              fullWidth
              variant="standard"
              onChange={(e) => setList({ ...list, image: e.target.files[0] })}
              accept="jpeg,jpg,png"
            />
            <p style={{ fontSize: "14px" }}>Text</p>
            <Editor
              apiKey={tinymceUrl}
              init={editorConfig}
              autoFocus
              fullWidth
              variant="standard"
              value={list.text}
              onEditorChange={(newContent) => setList({ ...list, text: newContent })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose2()}>Cancel</Button>
            <Button onClick={() => handleEdit()}>Done</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
     
      <Dialog
      fullWidth
      maxWidth="sm"
        open={opend}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{fontSize:"15px"}} id="alert-dialog-description">
            Are you sure want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button onClick={()=>handleDelete()} style={{color:"red"}} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Carousel;
