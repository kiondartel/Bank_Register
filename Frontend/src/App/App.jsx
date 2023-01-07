import Global from "../styles/globalstyle";
import { toast, ToastContainer } from "react-toastify";
import * as Styled from "./styles";
import Form from "../components/Form";

function App() {
  return (
    <>
      <Styled.Container>
        <Styled.Title>Usuarios</Styled.Title>
        <Form />
      </Styled.Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <Global />
    </>
  );
}

export default App;
