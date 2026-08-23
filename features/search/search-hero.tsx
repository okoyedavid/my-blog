export default function SearchHero() {
  return (
    <section className="section u-padding-bottom-1em">
      <div className="container">
        <div className="row row-align-end">
          <div className="column col-large-7 col-medium-12">
            <div className="h1 u-margin-0">Search Results</div>
          </div>
          <div className="column">
            <form
              action="/search"
              className="u-display-flex cc-search-bar-wrap w-form"
            >
              <input
                className="text-field u-margin-bottom-0 w-input"
                maxLength={256}
                name="query"
                placeholder="Search…"
                type="search"
                id="search"
                required
              />
              <input type="submit" className="button w-button" value="Search" />
            </form>
          </div>
        </div>
        <div className="separator"></div>
      </div>
      <div className="column col-large-4"></div>
    </section>
  );
}
