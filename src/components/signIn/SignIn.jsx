import React from "react";
import "./SignIn.scss";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/utils";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error)
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form autoComplete='false' onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required={true}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required={true}
          />
          <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
