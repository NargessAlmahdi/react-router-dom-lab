import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

// src/App.jsx

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = ({ boxOwner, boxSize }) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxOwner,
      boxSize,
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Mailbox List</h1>} />
       
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
      </>
  );
};

export default App;