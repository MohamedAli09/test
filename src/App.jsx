import React from "react";
import axios from "axios";
import img from "./portrait-young-cheerful-lady-shirt-denim-shorts-standing-with-colorful-shopping-bags-hands-happily-looking-aside-pink-background.jpg";
import img2 from "./836.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import "./App.css";
// const apiUrl = process.env.api;
export default function App() {
  const [data, setData] = useState(null);

  async function deleteData() {
    try {
      const res = await axios.delete("http://127.0.0.1/login");
      // console.log(res.data);

      // Display success  notification using react-toastify
      toast.success("Data deleted successfully", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error deleting data:", error);

      // Display error notification using react-toastify
      toast.error("Error deleting data", {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  async function getData() {
    try {
      const res = await axios.get("http://127.0.0.1/login");
      setData(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }

  async function postData() {
    try {
      const userName = document.getElementById("name").value;
      const res = await axios.post("http://127.0.0.1/login", { userName });
      // console.log(res);

      // Display success notification using react-toastify
      toast.success("Data posted successfully", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      const userName = document.getElementById("name").value;
      if (!userName) {
        // console.log(error.response.data.err.message);
        toast.error("Name is required", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        // console.log("Name is already exist!");

        toast.error("Name already exists", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="form-group ">
          <label htmlFor="name" className="">
            Name:
          </label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="">
          <button
            className="btn btn-primary me-1"
            type="button"
            onClick={postData}
          >
            Post
          </button>
          <a href="#popup2" className="btn btn-primary me-1" onClick={getData}>
            Get
          </a>
          <button className="btn btn-danger" type="button" onClick={deleteData}>
            Delete
          </button>
        </div>

        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>

      <div className="popup-card  ">
        <div className="popup-link  ">
          <a href="#popup1">Private Button</a>
        </div>
        <div id="popup1" className="popup-container">
          <div className="popup-content">
            <a href="#" className="close">
              &times;
            </a>
            <img src={img} alt="" className="w-100" />
            <h3>Popup 1</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      <div className="popup-card">
        <div className="popup-link"></div>
        <div id="popup2" className="popup-container  ">
          <div className="popup-content">
            <a href="#" className="close">
              &times;
            </a>
            <img src={img2} alt="" className="w-100" />
            <h3 className="text-center">Users</h3>

            <div className="users text-center mt-5  ">
              <div className="row  g-4">
                {data?.usersData.map((user) => (
                  <div className="col-md-4  " key={user._id}>
                    <div className="users-card border rounded overflow-auto">
                      <p className="m-0 p-1">name :{user.userName}</p>
                      <p className="m-0 p-1">IP :{user.IP}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
