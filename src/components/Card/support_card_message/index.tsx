interface IProps {
  toggleCard: (id: string | number) => void;
  activeCards: (string | number)[];
  msg: {
    id: string | number;
    name: string;
    url: string;
    date: string;
    message: string;
  };
}
const SupportCardMessage: React.FC<IProps> = ({
  msg,
  toggleCard,
  activeCards,
}) => {
  const isActive = activeCards.includes(msg.id);

  return (
    <div key={msg.id} className="support-message-item">
      <div
        className="support-message-item-header"
        onClick={() => toggleCard(msg.id)}
      >
        <div className="left">
          <img src={msg.url} alt="User Avatar" /> {msg.name}
        </div>
        <div className="right">
          <i className="ft-calendar"></i> {msg.date}
        </div>
        <div className="clearfix"></div>
      </div>
      {isActive && (
        <div className="support-message-item-body">{msg.message}</div>
      )}
    </div>
  );
};

export default SupportCardMessage;
