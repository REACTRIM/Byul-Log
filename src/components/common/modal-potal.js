const ModalPortal = ({ children }) => {
  const el = document.getElementById("modal-root");
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
