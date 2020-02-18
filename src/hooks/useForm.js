import { useState } from 'react';

const useForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
export default useForm;

// ---USAGE---

// Below is a function that can be used as the callback to post the
// data or whatever needs to happen with the submitted form data

// const complete = () => console.log(inputs);

// const { handleSubmit, handleInputChange, inputs } = useForm(
//   {
//     firstName: '',
//   },
//   complete,  <--CALLBACK FUNCTION
// );

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             onChange={handleInputChange}
//             value={inputs.firstName}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
