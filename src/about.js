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

function About() {
  const backendUrl = process.env.REACT_APP_BHARANI_BACKEND_URL;
  const tinymceUrl = process.env.REACT_APP_TINYMCE_APP;

  const [list,setList] = useState([])
  const [image,setImage]= useState([])
  const [text,setText] = useState('')
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [opend,setOpend] = useState(false);
  const [id, setId] = useState(null);
  const [message, setMessage] = useState("");
  const [data,setdata] = useState({
    image:null,
    text:"",
  })

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

    try{
      const response =  await axios.get(`${backendUrl}/index/geteditabout/${id}`);
      await setdata({
        text: response.data.text,
        image: response.data.image || [], 
      })
    }catch(err){
      console.log(err)
    }
   
  };
  
  const handleClose2 = () => {
    setOpens(false);
  };

  const handleOpenDelete =(id)=>{
    setId(id)
    setOpend(true);
  }
  const handleCloseDelete =()=>{
    setOpend(false);
  }

  const editorConfig = {
   
    apiKey: tinymceUrl,
    plugins: ["lists", "code"],
    toolbar: "bullist numlist code",
    menu: { tools: { title: "Tools", items: "listprops" } },
  };

  const handleAdd = ()=>{
    const formData =  new FormData();

    for (let i = 0; i < image.length; i++) {
      formData.append("image", image[i]);
    }

    formData.append("text", text)

    try{
      axios.post(`${backendUrl}/index/addAbout`,formData,{
        headers:{
          "Content-Type":"multipart/form-data",
        }
      })
      window.location.href = "/about?message=About%20Added%20successfully";
    }catch(err){
      console.log(err);
    }
  }

  const fetchData =async()=>{
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;

    try{
      const response = await axios.get(`${backendUrl}/index/getabout`)
      await setList(response.data)
    }catch(err){
      if (err.response.status == "400") {
        window.location.href = "/authentication/sign-in";
      }
      console.log(err);
    }

  }

  const handleEdit = async () => {
    const formData = new FormData();
  
    for (let i = 0; i < data.image.length; i++) {
      formData.append("image", data.image[i]);
    }
  
    formData.append("text", data.text); 
  
    try {
      await axios.put(`${backendUrl}/index/editabout/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      window.location.href = "/about?message=About%20Updated%20successfully";
    } catch (err) {
      console.log(err);
    }
  };
  

  const handleDelete =async()=>{
    try {
      if (id) {
        await axios.delete(`${backendUrl}/index/aboutDelete/${id}`);
        setList(list.filter(item => item._id !== id)); 
      }
      window.location.href = `/about?message=Product%20Deleted%20successfully`;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox display="flex" justifyContent="space-between" alignItems="space-between" p={3}>
        <SoftTypography variant="h6">About table</SoftTypography>
        <Button style={{ fontSize: "15px" }} onClick={() => handleClickOpen()}>
          Add About
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
           {list.map((item,index)=>{
            return(
              <tr key={index}>
                   
                <td className="text-center" style={{ fontSize: "15px" }}>
                <img style={{ width: "60px" }} src={`${backendUrl}/uploads/${item.image[0]}`} />
                </td>
                <td
                  dangerouslySetInnerHTML={{__html:item.text}}
                  className="text-left"
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
            )
           })}
                
          </tbody>
        </Table>
      </Card>
      <div>
        <Dialog maxWidth="sm" fullWidth open={open}>
          <DialogTitle style={{ fontSize: "18px" }}> Add About Details</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontSize: "15px" }}>Add About</DialogContentText>
            <p style={{ fontSize: "14px" }}>Image</p>
            <input
              autoFocus
              type="file"
              onChange={(e) => setImage([...e.target.files])}
             multiple
              accept="jpeg,jpg,png"
              style={{fontSize: "14px",width:"100%"}}
            />
            <p style={{ fontSize: "14px" }}>Text</p>
           
            <Editor
              apiKey={tinymceUrl}
              init={editorConfig}
              autoFocus
              fullWidth
              variant="standard"
              onEditorChange={(content)=> setText(content)}
              
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()}>Cancel</Button>
            <Button onClick={()=>handleAdd()}>Done</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog maxWidth="sm" fullWidth open={opens}>
          <DialogTitle style={{ fontSize: "18px" }}> Edit About Details</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontSize: "15px" }}>Edit About</DialogContentText>
            <p style={{ fontSize: "14px" }}>Image</p>
            <input
              autoFocus
              type="file"
              multiple
              accept="jpeg,jpg,png"
              style={{fontSize: "14px"}}
              
              onChange={(e)=> setdata({...data,image:e.target.files})}
            />
           
            <p style={{ fontSize: "14px" }}>Text</p>
            <Editor
              apiKey={tinymceUrl}
              init={editorConfig}
              autoFocus
              fullWidth
              variant="standard"
              value={data.text}
              onEditorChange={(content)=> setdata({...data,text:content}) }
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
          <Button  onClick={()=>handleDelete()} style={{color:"red"}} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      <Footer />
    </DashboardLayout>
  );
}

export default About;
