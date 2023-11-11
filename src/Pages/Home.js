import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import database from "../firestore";
import Button from "react-bootstrap/Button";
import storage from "../Storage";
import { ref, uploadBytes, listAll } from "firebase/storage";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { v4 } from "uuid";

const Home = () => {
  const [info, setInfo] = useState([]);
  const db = getFirestore();
  // Start the fetch operation as soon as
  // the page loads

  // Fetch the required data using the get() method
  const getData = async () => {
    const array = [];
    const querySnapshot = await getDocs(collection(db, "Products"));
    querySnapshot.forEach((doc) => {
      array.push({
        ...doc.data(),
        key: doc.id,
      });
      // doc.data() is never undefined for query doc snapshots
      setInfo(array);
      console.log(doc.id, " => ", doc.data());
    });
  };

  useEffect(() => {
    getData();
  }, []);

  

  return (
    <div className="p-5">
      <Table striped bordered hover className="p-5 mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Size</th>
            <th>Color</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.size}</td>
                <td>{item.color}</td>
                <td>
                  <Button variant="success" className="mx-5">
                    Edit
                  </Button>
                  <Button variant="danger"> Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
