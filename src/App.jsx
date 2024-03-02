import React from "react";
import axios from "axios";
import img from "./portrait-young-cheerful-lady-shirt-denim-shorts-standing-with-colorful-shopping-bags-hands-happily-looking-aside-pink-background.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
import "./App.css";
const apiUrl = process.env.api
 export default function App() {
  async function deleteData() {
    try {
      const res = await axios.delete(apiUrl);
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
      console.log(res.data);
    } catch (error) {
      console.error("Error getting data:", error);
    }
  }

  async function postData() {
    try {
      const userName = document.getElementById("name").value;
      const res = await axios.post("http://127.0.0.1/login", { userName });
      console.log(res);

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
        console.log(error.response.data.err.message);
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
        console.log("Name is already exist!");

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
          <button
            className="btn btn-primary me-1"
            type="button"
            onClick={getData}
          >
            Get
          </button>
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
      <div  className="popup-card">
        <div class="popup-link">
          <a href="#popup1">Private Button</a>
          
        </div>
        <div id="popup1" class="popup-container">
          <div class="popup-content">
            <a href="#" class="close">
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
    </>
  );
}
