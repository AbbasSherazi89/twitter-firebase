import React, { useEffect, useState } from "react";
import { Table, Card, Image, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const UsersData = (props) => {
    const navigate = useNavigate();
  const [user, setUser] = useState([]);
  
  const usersCollection = collection(db, "user");

  useEffect(() => {
    const getusers = async () => {
      
      const data = await getDocs(usersCollection);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getusers();
  }, [usersCollection]);

  const logout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
       <div className="container">
        <div className="row profile-row">
          <div className="col-md-9">
            <Card style={{ margin: 24 }}>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="align-items-center" style={{ marginRight: 8 }}>
                  <Image src="assets/RelymerLabs.png" width={150} />
                </div>
                <div><button className="btn btn-primary" onClick={logout}>Logout</button></div>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Age</th>
                      <th>Password</th>
                    </tr>
                  </thead>
                  
                    {user.length ? (
                    user.map((usr, id) => {
                      return (
                        <>
                        <tbody key={id}>
                          <tr>
                            <td>{id + 1}</td>
                            <td>{usr.email}</td>
                            <td>{usr.gender}</td>
                            <td>{usr.age}</td>
                            <td>{usr.password}</td>
                            
                            <td>
                            </td>
                          </tr>
                          </tbody>
                        </>
                      );
                      
                    })
                ):<h3 className="text-center">Data Not Found</h3>
                }

                  
                </Table>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <p style={{ marginTop: 8, fontSize: 12, color: "#A1A1A1" }}>
                  © 2022 Relymer
                </p>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersData
