import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set, get } from "firebase/database";
import {
  getStorage,
  listAll,
  ref as refStore,
  uploadBytes,
} from "firebase/storage";
import {
  doc,
  setDoc,
  getFirestore,
  collection,
  getDownloadURL,
  updateDoc,
} from "firebase/firestore";
import { v4 } from "uuid";
// eslint-disable-next-line no-unused-vars
import database from "../firestore";
// eslint-disable-next-line no-unused-vars
import storage from "../Storage";
// eslint-disable-next-line no-unused-vars
import firebase from "../firebase";
import "bootstrap/dist/css/bootstrap.css";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useLocation } from "react-router-dom";
import "./Update.css";

const Update = ({ props }) => {
  const location = useLocation();
  const { data } = location.state;

  const initData = {
    name: data.name,
    price: data.price,
    category: data.category,
    size: data.size,
    color: data.color,
    shortDescription: data.shortDescription,
    description: data.description,
    imgBase64: data.imageUrl,
    projectId: data.projectId,
    count: data.count,
  };

  const [state, setState] = useState(initData);
  const {
    name,
    price,
    category,
    size,
    color,
    shortDescription,
    description,
    imgBase64,
    projectId,
    count,
  } = state;
  const [fetchData, setFetchData] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState(imgBase64);

  const dbStore = getFirestore();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleImageOnchange = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => {
      setImageUrl(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };

  console.log("imageUrl: ", imageUrl);

  const newDocRef = doc(dbStore, "Products", projectId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(newDocRef, {
      name,
      category,
      price,
      size,
      color,
      count: 100,
      shortDescription,
      description,
      imageUrl,
      count,
    });

    console.log("update oke");
  };

  return (
    <>
      <div className="title ">
        <p className="title-name"> UPDATE  PRODUCT</p>
      </div>
      <Form className="col-6 mx-auto" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>Product's name:</Form.Label>
            <Form.Control
              placeholder="Product name"
              name="name"
              onChange={handleOnChange}
              value={name}
            />
          </Col>
          <Col>
            <Form.Label>Product's price:</Form.Label>
            <Form.Control
              placeholder="Product's price"
              name="price"
              onChange={handleOnChange}
              value={price}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label>Product's category:</Form.Label>
            <Form.Select
              name="category"
              as="select"
              value={category}
              onChange={handleOnChange}
            >
              <option>Open this select color</option>
              <option name="ao-thun">T-Shirt</option>
              <option name="vay">Váy</option>
              <option name="polo">Polo</option>
              <option name="quan">Quần</option>
              <option name="jean">Jean</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Product's size:</Form.Label>
            <Form.Select
              as="select"
              name="size"
              value={size}
              onChange={handleOnChange}
            >
              <option>Open this select color</option>
              <option name="S">S</option>
              <option name="M">M</option>
              <option name="L">L</option>
              <option name="XL">XL</option>
              <option name="XXL">XXL</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label>Product's color:</Form.Label>
            <Form.Select name="color" value={color} onChange={handleOnChange}>
              <option>Open this select color</option>
              <option name="yellow">Yellow</option>
              <option name="red">Red</option>
              <option name="white">White</option>
              <option name="black">Black</option>
              <option name="blue">Blue</option>
            </Form.Select>
          </Col>
          <Col>
            <label htmlFor="formFile" className="form-label">
              Count
            </label>
            <Form.Control
              placeholder="Product's count"
              name="count"
              onChange={handleOnChange}
              value={count}
            />
          </Col>
        </Row>
        <Row className="mb-3 ">
          <Col className="py-3">
            <Form.Label>Preview product's image:</Form.Label>
            <Image src={imageUrl} height="50px" width="60px" />
          </Col>
          <Col>
            <label htmlFor="formFile" className="form-label">
              Choose Image
            </label>
            <input
              className="form-control"
              type="file"
              onChange={(event) => {
                handleImageOnchange(event);
              }}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <InputGroup>
            <InputGroup.Text id="basic-addon1">
              Short description:
            </InputGroup.Text>
            <Form.Control
              value={shortDescription}
              name="shortDescription"
              onChange={handleOnChange}
              as="textarea"
            />
          </InputGroup>
        </Row>

        <Row className="mb-3">
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Description:</InputGroup.Text>
            <Form.Control
              value={description}
              name="description"
              onChange={handleOnChange}
              aria-label="With textarea"
              as="textarea"
            />
          </InputGroup>
        </Row>

        <Row className="mx-auto col-3">
          <Button className="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default Update;
