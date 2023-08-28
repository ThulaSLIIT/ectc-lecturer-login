/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import {

  Card,
  CardHeader,
Button,
 
  Input,

 


  Table,
  Container,
  Row,
  
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Payments History</h3>
                <br></br>
               
                <br></br>
                <th scope="row">
        <tr> <Input placeholder="" type="text" /></tr>
        </th>
        
        
            <th scope="row">
            <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="Big"
                  >
                   View
                  </Button>
              </th>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Course Name</th>
                    <th scope="col">Batch Code</th>
                    <th scope="col">			Month</th>
                    <th scope="col">		Total Hours</th>
                    <th scope="col">	Payment Rate</th>
                    <th scope="col">		Paid Amount</th>
            
                   
                    <th scope="col" />
                  </tr>
                </thead>
              
                <th scope="row">
                      <td>	No record found!</td>
                      </th>
              </Table>
            
            </Card>
          </div>
        </Row>
        {/* Dark table */}
        
      </Container>
    </>
  );
};

export default Tables;
