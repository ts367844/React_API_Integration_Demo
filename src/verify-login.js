import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { showErrorMessage } from "./message";
import { FILE_NAME } from "./common";
import { useEffect } from "react";
export default function VerifyLogin() {
  var [cookies] = useCookies(FILE_NAME);
  var navigator = useNavigate();

  useEffect(() => {
    var id = cookies["id"];
    if (id === undefined) {
      showErrorMessage("Login required");
      navigator("/");
      console.log("User ID:", cookies["id"]);
    }
  }, [cookies]);
}
