function Postnew(){
    return(
       <div className="container mt-3">
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">Post New Job</h4>

        <form>
          <input className="form-control mb-2" placeholder="Job Title" />
          <input className="form-control mb-2" placeholder="Location" />

          <select className="form-select mb-2">
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>

          <textarea
            className="form-control mb-3"
            placeholder="Job Description"
          />

          <button className="btn btn-success" disabled>
            Submit Job
          </button>
        </form>
      </div>
    </div>
    );
}

export default Postnew;