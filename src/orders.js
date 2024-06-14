import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";

function Orders() {
  const backendUrl = process.env.REACT_APP_BHARANI_BACKEND_URL;
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetchData();

  }, []);

 
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axios.get(`${backendUrl}/index/getOrders`);
      const data = await response.data;
      setData(data);
      console.log("2222",data);
    } catch (err) {
      if (err.response.status == "400") {
        window.location.href = "/authentication/sign-in";
      }
      console.log(err);
    }
  };

  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox display="flex" justifyContent="space-between" alignItems="space-between" p={3}>
        <SoftTypography variant="h6">Orders table</SoftTypography>
        
      </SoftBox>
     
      <Card>
        <Table striped bordered hover className="table-shadow">
          <thead>
            <tr>
             
              <th className="text-center" style={{ fontSize: "15px" }}>
                Pr Image
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
              prName/qty/prAmonut
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Order ID/ttamt
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Cus Name
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Cus ph/em
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Cus add/state
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Cus app/pin/city
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Date
              </th>
              <th className="text-center" style={{ fontSize: "15px" }}>
                Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                 
                    <td className="text-center" style={{ fontSize: "15px" }}>
                        {item.product.map((items,index)=>(
                            <div key={index}>
                      <img  style={{ width: "60px" }} src={`${backendUrl}/uploads/${items.image}`} />
                      
                      </div>
                        ))}
                    </td>
                    <td className="text-center" style={{ fontSize: "15px" }}>
                        {item.product.map((items,index)=>(
                            <div key={index}>
                      <p>{items.name}<br/>{items.quantity}*{items.price}<br/></p>
                      
                      </div>
                        ))}
                    </td>
                    <td
                    
                      style={{ fontSize: "15px" }}
                    >{item.orderId}<br/>{item.Amount}</td>
                    <td
                    
                      style={{ fontSize: "15px" }}
                    >{item.firstname}<br/>{item.lastname}</td>
                    <td
                     
                      className="text"
                      style={{ fontSize: "15px" }}
                    >{item.email}<br/>{item.Phone}</td>
                    <td
                     
                      className="text"
                      style={{ fontSize: "15px" }}
                    >{item.address}<br/>{item.state}</td>
                    <td
                     
                      className="text"
                      style={{ fontSize: "15px" }}
                    >{item.appartment}<br/>{item.pincode}<br/>{item.city}</td>
                    <td
                     
                      className="text"
                      style={{ fontSize: "15px" }}
                    >{item.date}<br/>{item.orderType}</td>
                    <td
                     
                      className="text"
                      style={{ fontSize: "15px" }}
                    >{item.orderStatus}</td>
                    <td className="text-center">
                     
                      
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Card>
      

      
     
      <Footer />
    </DashboardLayout>
  );
}

export default Orders;

