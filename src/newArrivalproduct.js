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


function Newarrivals() {
  const backendUrl = process.env.REACT_APP_BHARANI_BACKEND_URL;
  const tinymceUrl = process.env.REACT_APP_TINYMCE_APP;

  const [image, setImage] = useState([]);
  const [text, setText] = useState("");
  const [mrp, setMrp] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [flavour,setFlavour] =useState("");
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [opend, setOpend] = useState(false);
  const [id, setId] = useState(null);
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedcategory, setSelectedCategory] = useState("");
  const [data, setdata] = useState({
    image: [],
    text: "",
    name: "",
    mrp: "",
    price: "",
    category: "",
    flavour:""
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
    try {
        const response = await axios.get(`${backendUrl}/index/editnewgetProdcut/${id}`);
        const data = await response.data;
        console.log(data);
        setdata({
          image: data.image || [],
          text: data.text || "",
          name: data.name || "",
          mrp: data.mrp || "",
          price: data.price || "",
          category: data.category || "",
          flavour:data.flavour || "",
        });
      } catch (err) {
        console.log(err);
      }
    
  };

  const handleClose2 = () => {
    setOpens(false);
  };

  const handleOpenDelete = (id) => {
    setId(id)
    setOpend(true);
  };
  const handleCloseDelete = () => {
    setOpend(false);
  };
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const editorConfig = {
    apiKey: tinymceUrl,
    plugins: ["lists", "code"],
    toolbar: "bullist numlist code",
    menu: { tools: { title: "Tools", items: "listprops" } },
  };

  const handleAdd = async () => {
    const formData = new FormData();

    for (let i = 0; i < image.length; i++) {
      formData.append("image", image[i]);
    }

    formData.append("text", text);
    formData.append("mrp", mrp);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("category", selectedcategory);
    formData.append("flavour", flavour);

    try {
      await axios.post(`${backendUrl}/index/newproductadd`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      window.location.href = "/newproducts?message=Product%20Added%20successfully";
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;

    try {
        const response = await axios.get(`${backendUrl}/index/newgetproduct`);
        setList(response.data);
      } catch (err) {
        if (err.response.status == "400") {
          window.location.href = "/authentication/sign-in";
        }
        console.log(err);
      }
   

    try {
      const response = await axios.get(`${backendUrl}/index/getCategory`);
      setCategory(response.data);
    } catch (err) {
      if (err.response.status == "400") {
        window.location.href = "/authentication/sign-in";
      }
      console.log(err);
    }
  };

  const handleEdit = async () => {
    const formData = new FormData();

    if (data.image) {
      for (let i = 0; i < data.image.length; i++) {
          formData.append("image", data.image[i]);
      }
  }

  formData.append("text", data.text);
  formData.append("name", data.name);
  formData.append("mrp", data.mrp);
  formData.append("price", data.price);
  formData.append("category", data.category);
  formData.append("flavour", data.flavour);
  
    try {
      await axios.put(`${backendUrl}/index/neweditproduct/${id}`, formData, {
        headers:{

            "Content-type": "multipart/form-data",
        }
      });
      window.location.href = "/newproducts?message=Product%20updated%20successfully";
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      if (id) {
        await axios.delete(`${backendUrl}/index/newproductDelete/${id}`);
        setList(list.filter((item) => item._id !== id));
      }
      window.location.href = `/newproducts?message=Product%20Deleted%20successfully`;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox display="flex" justifyContent="space-between" alignItems="space-between" p={3}>
        <SoftTypography variant="h6">Product table</SoftTypography>
        <Button style={{ fontSize: "15px" }} onClick={() => handleClickOpen()}>
          Add Product
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
                Name
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Category
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                flavour
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Mrp
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Price
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
            {list.map((item,index)=>(
                 <tr key={index}>
                 <td className="text-center" style={{ fontSize: "15px" }} >
                   <img style={{ width: "60px" }} src={`${backendUrl}/uploads/${item.image[0]}`} />
                 </td>
                 <td className="text-left" style={{ fontSize: "15px" }}>
                 {item.name}
                 </td>
                 <td className="text-left" style={{ fontSize: "15px" }}>
                   {category.find((name) => name._id === item.category)?.name || ""}
                 </td>
                 <td
                   className="text-left"
                   style={{ fontSize: "15px" }}
                 >
                   {item.flavour}
                 </td>
                 <td
                   className="text-left"
                   style={{ fontSize: "15px", textDecoration: "line-through" }}
                 >
                  {item.mrp}
                 </td>
                 <td className="text-left" style={{ fontSize: "15px" }}>
                   {item.price}
                 </td>
                 <td
                    dangerouslySetInnerHTML={{ __html: item.text.slice(0,650) }}
                   className="text-left"
                   style={{ fontSize: "13px" }}
                 ></td>
                 <td className="text-center">
                   <Button onClick={() => handleClickOpens(item._id)} style={{ fontSize: "15px" }}>
                     <EditIcon />
                   </Button>
                   <Button style={{ fontSize: "15px" }}>
                     <DeleteIcon
                       onClick={() => handleOpenDelete(item._id)}
                       style={{ color: "red" }}
                     />
                   </Button>
                 </td>
               </tr>
            ))}
               
             
          </tbody>
        </Table>
      </Card>
      <div>
        <Dialog maxWidth="sm" fullWidth open={open}>
          <DialogTitle style={{ fontSize: "18px" }}> Add Product Details</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontSize: "15px" }}>Add Product</DialogContentText>
            <p style={{ fontSize: "14px" }}>Image</p>
            <input
              autoFocus
              type="file"
              onChange={(e) => setImage([...e.target.files])}
              multiple
              accept="jpeg,jpg,png"
              style={{ fontSize: "14px" }}
            />
            <p style={{ fontSize: "14px" }}>Name</p>
            <input
              style={{ fontSize: "14px", width: "100%" }}
              onChange={(e) => setName(e.target.value)}
              type="text "
            />
            <p style={{ fontSize: "14px" }}>Category</p>
            <select
              onChange={handleChange}
              style={{ width: "100%", height: "40px", fontSize: "14px" }}
            >
              <option disabled selected>
                Select Category
              </option>
              {category.map((item, index) => {
                return (
                  <option value={item._id} key={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <p style={{ fontSize: "14px" }}>Flavor</p>
            <input
              style={{ fontSize: "14px", width: "100%" }}
              onChange={(e) => setFlavour(e.target.value)}
              type="number "
            />
            <p style={{ fontSize: "14px" }}>Mrp</p>
            <input
              style={{ fontSize: "14px", width: "100%" }}
              onChange={(e) => setMrp(e.target.value)}
              type="number "
            />
            <p style={{ fontSize: "14px" }}>Price</p>
            <input
              style={{ fontSize: "14px", width: "100%" }}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />

            <p style={{ fontSize: "14px" }}>Text</p>
            <Editor
              apiKey={tinymceUrl}
              init={editorConfig}
              autoFocus
              fullWidth
              variant="standard"
              onEditorChange={(content) => setText(content)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()}>Cancel</Button>
            <Button onClick={handleAdd}>Done</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog maxWidth="sm" fullWidth open={opens}>
          <DialogTitle style={{ fontSize: "18px" }}> Edit Product Details</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontSize: "15px" }}>Edit Product</DialogContentText>
            <p style={{ fontSize: "14px" }}>Image</p>
            <input
              autoFocus
              type="file"
              multiple
              accept="jpeg,jpg,png"
              style={{ fontSize: "14px" }}
              onChange={(e) => setdata({ ...data, image: e.target.files })}
            />
            <p style={{ fontSize: "14px" }}>Name</p>
            <input
              style={{ fontSize: "14px", width: "100%" }}
              value={data.name}
              onChange={(e) => setdata({ ...data, name: e.target.value })}
              type="text "
            />
            <p style={{ fontSize: "14px" }}>Category</p>
            {data.category.length > 0 ? (
              <select
                value={data.category}
                onChange={(e) => setdata({ ...data, category: e.target.value })}
                style={{ width: "100%", height: "40px", fontSize: "14px" }}
              >
                <option disabled selected>
                  Select Category
                </option>
                {category.map((item, index) => {
                  return (
                    <option value={item._id} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            ) : (
              <select
                onChange={(e) => setdata({ ...data, category: e.target.value })}
                name="category"
                style={{ width: "100%", height: "40px", fontSize: "14px" }}
              >
                <option disabled selected>
                  Select Category
                </option>
                {category.map((item, index) => {
                  return (
                    <option value={item._id} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            )}

            <p style={{ fontSize: "14px" }}>Flavour</p>
            <input
              style={{ fontSize: "14px", width: "100%" }}
              value={data.flavour}
              onChange={(e) => setdata({ ...data, flavour: e.target.value })}
              type="number "
              name="flavour"
            />
            <p style={{ fontSize: "14px" }}>Mrp</p>
            <input
              style={{ fontSize: "14px", width: "100%" }}
              value={data.mrp}
              name="mrp"
              onChange={(e) => setdata({ ...data, mrp: e.target.value })}
              type="number "
            />
            <p style={{ fontSize: "14px" }}>Price</p>
            <input
              style={{ fontSize: "14px", width: "100%" }}
              type="number"
              value={data.price}
              name="price"
              onChange={(e) => setdata({ ...data, price: e.target.value })}
            />
            <p style={{ fontSize: "14px" }}>Text</p>
            <Editor
              apiKey={tinymceUrl}
              init={editorConfig}
              autoFocus
              fullWidth
              variant="standard"
              value={data.text}
              name="text"
              onEditorChange={(content) => setdata({ ...data, text: content })}
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
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontSize: "15px" }} id="alert-dialog-description">
              Are you sure want to delete?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDelete}>Cancel</Button>
            <Button onClick={handleDelete} style={{ color: "red" }} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Newarrivals;
