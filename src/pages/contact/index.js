import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const Contact = () => {
  const navigate = useNavigate();
  const {user} = useContext(UserContext);
  return (
    <>
      <h1>Contact Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <button onClick={()=>{
        navigate("/")
      }}>Go to Home Page</button>
    </>
  );
}

export default Contact
