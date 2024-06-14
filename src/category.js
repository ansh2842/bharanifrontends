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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Carousel() {
  const backendUrl = process.env.REACT_APP_BHARANI_BACKEND_URL;
  const [name, setName] = useState(" ");
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [opend,setOpend] = useState(false);
  const [message, setMessage] = useState("");
  const [list,setList] = useState({
    name:""
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
 
  const handleClose2 = () => {
    setOpens(false);
  };
  const handleClickOpens = async(id) => {
    setId(id);
    setOpens(true);

    try{
        const response = await axios.get(`${backendUrl}/index/editCategory/${id}`);
        setList({
            name: response.data.name
        })
    }catch(err){
        console.log(err);
    }
  };

  const handleOpenDelete =(id)=>{
    setId(id)
    setOpend(true);

  }
  const handleCloseDelete =()=>{
    setOpend(false);
  }

    const handleAdd =async()=>{

        const data ={
            name:name
        }

        try{
            await axios.post(`${backendUrl}/index/addCategory`,data)
            .then((res =>{
                if(res.status === 200){
                    window.location.href = `/category?message=Category%20Added%20successfully`;
                }
            }))
        }catch(e){
            console.log(e)
        }
    }

    const fetchData =async()=>{
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;

        try{
            const response = await axios.get(`${backendUrl}/index/getCategory`)
            setData(response.data);
        }catch(err){
            if (err.response.status == "400") {
                window.location.href = "/authentication/sign-in";
              }
            console.log(err)
        }

    }

    const handleEdit =async()=>{

        const data ={
            name: list.name
        }

        try{
           await axios.put(`${backendUrl}/index/updateCategory/${id}`, data)
            .then((res)=>{
                if(res.status === 200){
                    window.location.href = `/category?message=Category%20Updated%20successfully`;
                }
            })
        }catch(err){
            console.log(err)
        }
    }

    const handleDelete =async()=>{

        
        try{
         if(id){
              await axios.delete(`${backendUrl}/index/categoryDelete/${id}`);
              setData(data.filter(item => item._id !== id))
              window.location.href = `/category?message=Category%20Deleted%20successfully`;
            }
            
          }catch (err){
            console.log(err);
          }
    }

    
 
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox display="flex" justifyContent="space-between" alignItems="space-between" p={3}>
        <SoftTypography variant="h6">Category table</SoftTypography>
        <Button style={{ fontSize: "15px" }} onClick={() => handleClickOpen()}>
          Add Category
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
                Name
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item,index)=>{
                return(
                    <tr key={index}>
                    <td
                      className="text-center"
                      style={{ fontSize: "15px" }}
                    >{item.name}</td>
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
          <DialogTitle style={{ fontSize: "18px" }}> Add Category Details</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontSize: "15px" }}>Add Category</DialogContentText>
            <p style={{ fontSize: "14px" }}>Name</p>
            <TextField
              autoFocus
              type="text"
              fullWidth
              variant="standard"
             onChange={(e)=> setName(e.target.value)}
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
          <DialogTitle style={{ fontSize: "18px" }}> Edit Category Details</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontSize: "15px" }}>Edit Category</DialogContentText>
            <p style={{ fontSize: "14px" }}>Text</p>
            <TextField
              autoFocus
              type="text"
              fullWidth
              variant="standard"
              value={list.name}
              onChange={(e)=> setList({...list,name: e.target.value})}
              accept="jpeg,jpg,png"
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
