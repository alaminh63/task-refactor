import Modal from "../ui/modal";




const TasksModal = ({ isOpen, setIsOpen, item }) => {
 

 
  const onCancel = () => {
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        Hi
    
    </Modal>
  );
};

export default TasksModal;
