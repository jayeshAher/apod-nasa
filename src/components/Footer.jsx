const Footer = ({ handleToggleModal, data }) => {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>Astronomy Picture of the Day</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info" />
      </button>
    </footer>
  );
};

export default Footer;
