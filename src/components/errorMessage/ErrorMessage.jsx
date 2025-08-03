import toast, { Toaster } from "react-hot-toast";
import css from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  const notify = () => toast.error("Oops. Something went wrong");
  notify();
  return (
      
    <>
      
      <Toaster />
    </>
  )
};
export default ErrorMessage;
