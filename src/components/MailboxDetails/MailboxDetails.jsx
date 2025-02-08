
import { useParams } from 'react-router'

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams()
  const selectedMailbox = mailboxes.find(mailbox => mailbox._id === Number(mailboxId))

  if (!selectedMailbox) {
    return <h1>Mailbox Not Found!</h1>
  }

  return (
    <div>
      <h1>Mailbox {selectedMailbox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {selectedMailbox.boxOwner}</p>
      <p>Box Size: {selectedMailbox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;