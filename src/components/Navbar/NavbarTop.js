import "./NavbarTop.css";

const NavbarTop = () => {
  return (
    <div className="nav-wrapper">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active fs-5" aria-current="page" href="#">
            Store Wise Items
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  fs-5" href="#">
            All Store Items
          </a>
        </li>
      </ul>
      <hr />
      <div className="btn-wrapper-left">
        <div className="test btn-list-left test">
          <button type="button" className="btn btn-outline-dark ">
            EnterPrices 1
          </button>
          <button type="button" className="btn btn-outline-dark">
            EnterPrices 2
          </button>
          <button type="button" className="btn btn-outline-dark">
            EnterPrices 3
          </button>
          <button type="button" className="btn btn-outline-dark">
            EnterPrices 4
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default NavbarTop;
