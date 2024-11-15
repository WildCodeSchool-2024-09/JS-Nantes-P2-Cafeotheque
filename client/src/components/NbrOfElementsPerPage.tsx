import "../assets/style/NbrOfElementsPerPage.css";

interface NbrOfElementsPerPageProps {
  possibleNumbers: number[];
  setNbrOfElementsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function NbrOfElementsPerPage({
  possibleNumbers,
  setNbrOfElementsPerPage,
}: NbrOfElementsPerPageProps) {
  function handleClickNumberOfElems(nbr: number) {
    setNbrOfElementsPerPage(nbr);
  }
  return (
    <div id="elements-per-page-container">
      <p>Nombre d'elements par page</p>
      <ul id="elements-per-page">
        {/* Map the table given in props of choices of elements per page */}
        {possibleNumbers.map((el) => {
          return (
            <li
              key={el}
              className="pointer"
              onKeyDown={(e) => {
                if (e.key === "Enter") () => handleClickNumberOfElems(el);
              }}
              onClick={() => {
                handleClickNumberOfElems(el);
              }}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default NbrOfElementsPerPage;
