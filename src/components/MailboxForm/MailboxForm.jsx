
import { useNavigate } from 'react-router';
import { useState } from 'react';

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState('')
  const [boxSize, setBoxSize] = useState('Small')
  const navigate = useNavigate();

  const handleSubmit = (element) => {
    element.preventDefault();
    addBox({ boxOwner, boxSize })
    setBoxOwner('')
    setBoxSize('Small')
    navigate('/mailboxes')
  };

  return (
      <form onSubmit={handleSubmit}>
        <h1>New Mailbox</h1>
      <label>Enter a Boxholder:</label>
      <input 
        type="text" 
        value={boxOwner} 
        onChange={(element) => setBoxOwner(element.target.value)} 
        required 
      />
      <label>Select a Box Size:</label>
      <select value={boxSize} onChange={(element) => setBoxSize(element.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MailboxForm