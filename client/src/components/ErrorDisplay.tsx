import "../assets/style/ErrorDisplay.css";

function ErrorDisplay({ message }: { message: string }) {
  return (
    <>
      <p id="error-message">{message}</p>
    </>
  );
}
export default ErrorDisplay;
