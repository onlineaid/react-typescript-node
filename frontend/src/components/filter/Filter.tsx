import { useState } from "react";
import { useDispatch } from "react-redux";
import {filterProducts} from '../../redux/action/productActions'
import {AppDispatch} from '../../redux/store';

function Filter() {
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('populer');
  const [category, setCategory] = useState<string>('all');
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="row my-5">
      <div className="col-md-3">
        <div className="mb-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            className="form-control"
            placeholder="searche .."
          />
        </div>
      </div>

      <div className="col-md-3">
        <select
          className="form-select"
          aria-label="Default select example"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          {/* <option selected>Open this select menu</option> */}
          <option value="popular">popular</option>
          <option value="htl">High to Low</option>
          <option value="lth">Low to High</option>
        </select>
      </div>

      <div className="col-md-3">
        <select
          className="form-select"
          aria-label="Default select example"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="four">four</option>
          <option value="five">five</option>
        </select>
      </div>

      <div className="col-md-3">
        <button onClick={() => {dispatch(filterProducts(search, sort, category))}} className="btn btn-primary rounded-pill px-5 ml-auto">Search</button>
      </div>
    </div>
  );
}

export default Filter;
