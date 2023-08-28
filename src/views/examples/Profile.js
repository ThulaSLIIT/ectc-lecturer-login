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

 
  Row, Col ,Card,CardBody,CardTitle,Button,

  Container,
  
  
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
     
        {/* Dark table */}
        <Row>
              <Col lg="10" xl="6">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                       
                        <span className="h2 font-weight-bold mb-0">
                        Manuja Somarathne
                        </span>
                        <CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                        Last Login
                        </span>
                        </CardTitle>
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                        Date: 2023-07-17
                        </CardTitle>
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          time: 16:09:18 pm
                        </CardTitle>
                        
                        <th scope="row">
            <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="Big"
                  >
                   View more details
                  </Button>
              </th>
                      </div>
                    
                    </Row>
              
                  </CardBody>
                </Card>
              </Col>
           
              
            </Row>
            
      </Container>
    </>
  );
};

export default Tables;
