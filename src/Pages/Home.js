import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import database from "../firestore";
import Button from "react-bootstrap/Button";
import storage from "../Storage";
import { ref, uploadBytes, listAll } from "firebase/storage";
import { Link, useLocation } from "react-router-dom";

import {
  collection,
  getDocs,
  getFirestore,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { v4 } from "uuid";
import Image from "react-bootstrap/Image";

const Home = () => {
  const [info, setInfo] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const db = getFirestore();
  // Start the fetch operation as soon as
  // the page loads

  // Fetch the required data using the get() method
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"));
    const array = [];
    querySnapshot.forEach((doc) => {
      array.push({
        ...doc.data(),
        key: doc.id,
      });
      // doc.data() is never undefined for query doc snapshots
      setInfo(array);
    });
  };

  useEffect(() => {
    getData();
  }, [isDelete]);

  const handleDelete = async (id) => {
    // Remove the 'capital' field from the document
    await deleteDoc(doc(db, "Products", id));
    console.log(123);
    setIsDelete(!isDelete);
  };

  console.log(info);
  return (
    <div className="p-5">
      <div className="title ">
        <p className="title-name"> HOME PRODUCT</p>
      </div>
      <Table striped bordered hover className="p-5 mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Size</th>
            <th>Color</th>
            <th>Image</th>
            <th>Count</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {info.length > 0 &&
            info.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.size}</td>
                  <td>{item.color}</td>
                  <td>
                    <Image src={item.imageUrl} height={50} width={50}></Image>
                  </td>
                  <td>{item.count}</td>
                  <td>
                    <Link to="/update" state={{ data: item }}>
                      <Button variant="success" className="mx-5">
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item.projectId)}
                    >
                      Delete
                    </Button>
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
