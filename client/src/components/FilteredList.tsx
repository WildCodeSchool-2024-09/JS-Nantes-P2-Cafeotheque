import "../pages/CoffeesPage/FilteredList.css";

function FilteredList() {
  return (
    <aside className="container-list-left">
      <section>
        <div className="container-list-filtered">
          <div>
            <label htmlFor="continents">Continents</label>
            <input type="checkbox" id="continents" name="continents" />
          </div>
          <ul>
            <li>L'Europe</li>
            <li>L'Afrique</li>
            <li>L'Asie</li>
            <li>L'Amérique du Nord</li>
            <li>L'Amérique du Sud</li>
          </ul>
        </div>

        <input type="checkbox" id="pays" name="pays" />
        <label htmlFor="pays">Pays</label>

        <input type="checkbox" id="saveur" name="saveur" />
        <label htmlFor="saveur">Saveur</label>

        <input type="checkbox" id="prix" name="prix" />
        <label htmlFor="prix">Prix</label>
      </section>
    </aside>
  );
}

export default FilteredList;
