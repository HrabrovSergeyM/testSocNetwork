import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import classes from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required]}
          placeholder={"Email"}
          name={"email"}
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[required]}
          placeholder={"Password"}
          name={"password"}
          component={Input}
          type={"password"}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />{" "}
        remember me
      </div>

      {props.captchaUrl}
      {props.captchaUrl && <img src={props.captchaUrl} />}
      {props.captchaUrl && (
        <Field
          placeholder={"Symbols from image"}
          validate={[required]}
          name={"captcha"}
          component={Input}
        />
      )}
      {props.error && (
        <div className={classes.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
