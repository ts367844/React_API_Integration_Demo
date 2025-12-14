import { toast, Bounce } from "react-toastify";

const options = {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  transition: Bounce,
};
export function showErrorMessage(msg) {
  toast.error(msg, options);
}
export function showMessage(msg) {
  toast.info(msg, options);
}
