import './MainSection.css'
const MainSection = () => {
  return (
    <div className='main'>
      <div className="btn-wrapper">
        <div className="btn-list">
          <button type="button" className="btn btn-outline-primary ">
            Copy items
          </button>
          <button type="button" className="btn btn-outline-primary">
            Add Bulk items
          </button>
          <button type="button" className="btn btn btn-warning ">
            Manage Category
          </button>
          <button type="button" className="btn btn btn-primary ">
            Add item
          </button>
        </div>
      </div>
      <div className=" cell-container">
        <div className="row cell-container-row">
          <div className="col cells">
            <h4 className="text-dark">Total stock value(purchase)</h4>
            <p className="text-success fw-bold">RS 9999.05</p>
          </div>
          <div className="col cells">
            <h4>Total stock value</h4>
            <p className="text-danger fw-bold">RS 9999.05</p>
          </div>
          <div className="col cells">
            <h4>Total stock value</h4>
            <p className="text-success fw-bold">RS 9999.05</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainSection;
