import "../assets/style/ValidationDisplay.css";

function ValidationDisplay({ message }: { message: string }) {
  return (
    <>
      <p id="validation-message">{message}</p>
    </>
  );
}
export default ValidationDisplay;
