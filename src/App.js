import './App.css';
import {useFormik} from "formik";
import * as yup from 'yup';

function App() {
  return <>
  <Form/> 
  </>
}

const formValidationSchema = yup.object({
  email : yup.string().min(8, "Need a longer email😊")
  .required(),
  password : yup.string().min(8, "Passwowrd must be 8")
  .max(12, "should not grater 12")
  .required(),
})

function Form(){
  const formik = useFormik({
    initialValues: {
      email: "poo",
      password: "abc",
    },
    validationSchema: formValidationSchema,
    onSubmit:(values) => {
      console.log("Form Values", values);
    },
  });
  return <>
  <form onSubmit={formik.handleSubmit}>
    <input
      name='email' 
      value={formik.values.email}
      onChange={formik.handleChange} 
      onBlur={formik.handleBlur}
      type='email'     
      placeholder='username'
    />
    {formik.touched.email && formik.errors.email ? formik.errors.email : null}
    <br/>
    <input
      name='password' 
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      type='password' 
      placeholder='password'
    />
    {formik.errors.password && formik.errors.password ? formik.errors.password  : null}
    <br/>
    <button type='submit'>Sumit</button>
    {/* <div>
      Error
      <pre>{JSON.stringify(formik.errors)}</pre>
      Touched
      <pre>{JSON.stringify(formik.touched)}</pre>
    </div> */}
  </form>
  </>
}

export default App;
