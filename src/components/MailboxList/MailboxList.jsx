
import { Link } from 'react-router'

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
        <h1>Mailbox List</h1>
      {mailboxes.map(mailbox => (
        <div key={mailbox._id} className="mail-box">
          <Link to={`/mailboxes/${mailbox._id}`}>
            <h3>Mailbox {mailbox._id}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MailboxList