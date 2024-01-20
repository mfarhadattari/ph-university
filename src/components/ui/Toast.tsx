import Swal, { SweetAlertIcon } from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";

type TToast = {
  icon: SweetAlertIcon;
  title: string;
};

const Toast = ({ icon, title }: TToast) => {
  return Swal.fire({
    position: "bottom-end",
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
};

export default Toast;
