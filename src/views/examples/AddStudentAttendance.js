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


  //
  Button,


CardBody,
FormGroup,
Form,
Input,
InputGroupAddon,
InputGroupText,
InputGroup,

Col,

//
  

 


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
        <Col lg="6" md="8">
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-transparent pb-5">
          <div className="text-muted text-center mt-2 mb-4">
            <big>Add Lecture Coverage</big>
          </div>
       
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
       
          <Form role="form">
            
          <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                 
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Lecturer Name " type="text" />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                 
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Batch Code" type="text" />
              </InputGroup>
            </FormGroup>
         
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                 
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Start Time" type="text" />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                 
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="End Time" type="text" />
              </InputGroup>
            </FormGroup>
          
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                 
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="dd/mm/yyyy" type="text" />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                 
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Lecture Coverage" type="text" />
              </InputGroup>
            </FormGroup>
       
            <div className="text-center">
              <Button className="mt-4" color="primary" type="button">
              Add Student Attendance
              </Button>
              <Button className="mt-4" color="primary" type="button">
              Clear
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Mark Student Attendance</h3>
              </CardHeader>
              
                  
              
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Student Name</th>
                    <th scope="col">NIC</th>
                    <th scope="col">	Mark Attendance</th>
                    <th scope="col">	Attendance</th>
                    <th scope="col">View Attendance Report</th>
               
                    
                    <th scope="col" />
                  </tr>
                </thead>
              
              </Table>
            
            </Card>
            <br></br>
            <br></br>
          </div>
      
        </Row>
        {/* Dark table */}
        
      </Container>
    </>
  );
};

export default Tables;
