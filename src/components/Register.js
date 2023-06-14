import React, { Component } from "react";
import SafePropertyServices from "../services/safe-property";
import { Button, Form } from "semantic-ui-react";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.setusername = this.setusername.bind(this);
    this.setemail = this.setemail.bind(this);
    this.setpassword = this.setpassword.bind(this);
    this.setconfirmPassword = this.setconfirmPassword.bind(this);
    this.setphone = this.setphone.bind(this);
    this.register = this.register.bind(this); // Add this line

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    };
  }

  setusername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  setemail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  setpassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  setconfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  setphone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  register() {
    var data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      phone: this.state.phone,
    };

    // SafePropertyServices.create(data)
    //   .then((response) => {
    //     this.setState({
    //       username: response.data.username,
    //       email: response.data.email,
    //       password: response.data.password,
    //       confirmPassword: response.data.confirmPassword,
    //       phone: response.data.phone,
    //       submitted: true,
    //     });
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    SafePropertyServices.create(data)
      .then((response) => {
        if (
          response.data &&
          response.data.username &&
          response.data.email &&
          response.data.password &&
          response.data.confirmPassword &&
          response.data.phone
        ) {
          this.setState({
            username: response.data.username,
            email: response.data.email,
            password: response.data.password,
            confirmPassword: response.data.confirmPassword,
            phone: response.data.phone,
            submitted: true,
          });
          console.log(response.data);
        } else {
          console.log("Invalid response data format");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <Form
        style={{
          color: "#FFFFFF",
          fontFamily: "Montserrat",
          fontSize: "12px",
        }}
      >
        <Form.Field style={{ marginBottom: "20px" }}>
          <label style={{ margin: "0px 15px", fontSize: "18px" }}>Name</label>
          <input
            type="text"
            placeholder="Name"
            style={{ padding: "10px 15px" }}
            value={this.state.username}
            onChange={this.setusername}
          />
        </Form.Field>
        <Form.Field style={{ marginBottom: "20px" }}>
          <label style={{ margin: "0px 15px", fontSize: "18px" }}>Email</label>
          <input
            placeholder="Email"
            style={{ padding: "10px 15px" }}
            value={this.state.email}
            onChange={this.setemail}
          />
        </Form.Field>

        <Form.Field style={{ marginBottom: "20px" }}>
          <label style={{ margin: "0px 15px", fontSize: "18px" }}>
            Password
          </label>
          <input
            placeholder="Password"
            style={{ padding: "10px 15px" }}
            value={this.state.password}
            onChange={this.setpassword}
          />
        </Form.Field>
        <Form.Field style={{ marginBottom: "20px" }}>
          <label style={{ margin: "0px 15px", fontSize: "18px" }}>
            Confirm Password
          </label>
          <input
            placeholder="Confirm Password"
            style={{ padding: "10px 15px" }}
            value={this.state.confirmPassword}
            onChange={this.setconfirmPassword}
          />
        </Form.Field>

        <Form.Field style={{ marginBottom: "20px" }}>
          <label style={{ margin: "0px 15px", fontSize: "18px" }}>Phone</label>
          <input
            placeholder="Phone"
            style={{ padding: "10px 15px" }}
            value={this.state.phone}
            onChange={this.setphone}
          />
        </Form.Field>

        <Button
          type="submit"
          onClick={this.register} // <-- Changed method name to lowercase 'register'
          style={{ padding: "10px 15px", float: "right" }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

// import { useState } from "react";
// import { Button, Form } from "semantic-ui-react";
// import "../App.css";

// export default function Create() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phone, setPhone] = useState("");

// const postData = () => {
//   console.log("hello");
//   axios.post(`https://apione.axletechmm.com/api/register`, {
//     name: username,
//     email: email,
//     password: password,
//     confirmPassword: confirmPassword,
//     phone: phone,
//   });
// };

// const postData = () => {
//   console.log("hello");
// };
// return (
//   <Form
//     style={{
//       color: "#FFFFFF",
//       fontFamily: "Montserrat",
//       fontSize: "12px",
//     }}
//   >
//     <Form.Field style={{ marginBottom: "20px" }}>
//       <label style={{ margin: "0px 15px", fontSize: "18px" }}>Name</label>
//       <input
//         placeholder="Name"
//         style={{ padding: "10px 15px" }}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//     </Form.Field>
//     <Form.Field style={{ marginBottom: "20px" }}>
//       <label style={{ margin: "0px 15px", fontSize: "18px" }}>Email</label>
//       <input
//         placeholder="Email"
//         style={{ padding: "10px 15px" }}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </Form.Field>

//     <Form.Field style={{ marginBottom: "20px" }}>
//       <label style={{ margin: "0px 15px", fontSize: "18px" }}>Password</label>
//       <input
//         placeholder="Password"
//         style={{ padding: "10px 15px" }}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </Form.Field>
//     <Form.Field style={{ marginBottom: "20px" }}>
//       <label style={{ margin: "0px 15px", fontSize: "18px" }}>
//         Comfirm Password
//       </label>
//       <input
//         placeholder="Comfirm Password"
//         style={{ padding: "10px 15px" }}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />
//     </Form.Field>

//     <Form.Field style={{ marginBottom: "20px" }}>
//       <label style={{ margin: "0px 15px", fontSize: "18px" }}>Phone</label>
//       <input
//         placeholder="Phone"
//         style={{ padding: "10px 15px" }}
//         onChange={(e) => setPhone(e.target.value)}
//       />
//     </Form.Field>

//     <Button
//       type="submit"
//       onClick={postData}
//       style={{ padding: "10px 15px", float: "right" }}
//     >
//       Submit
//     </Button>
//   </Form>
// );
