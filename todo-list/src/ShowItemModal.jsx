const ShowItemModal = ({task}) =>{
    return(
        <div className="modal fade" id={"showItemModal"+task.id}>
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title"
            id="showItemModalLabel"
            >
                {task.task}
            </h5>
            </div>
            <div className="modal-body">
               <div className="row">
                <p className="col">
                {task.description}
                </p> 
               </div>
               <div className="row">
                <div className="col">
                <b>Limit:</b>{task.limit}
                </div>
                <div className="col">
                <b>Location:</b>{task.location}
                    <div>
                </div>
            </div>
            <div className="modal-footer">
                <button
                type="button"
                className="btn btn-outline-secundary"
                data-bs-dismiss="modal"
                >
                    <i className="bi bi-x-lg"></i>
                    Close
                </button>
                <button className="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-square"></i>
            Edit
              </button>
            <button className="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i>
            Delete
              </button>
               </div>
            </div>
           </div>
        </div>
      </div>
    </div>
    )
}

export default ShowItemModal;