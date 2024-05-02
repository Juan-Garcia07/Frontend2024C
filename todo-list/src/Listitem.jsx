import PropTypes from "prop-types"
import ShowItemModal from "./ShowItemModal"

const ListItem = ({task}) =>{
    return(
        <>
        <div className="row">
          <div className="col-5">
            <ShowItemModal task={task}/>
            <input type="checkbox"/>
              <button className="btn btn-link"
              data-bs-target={"#showItemModal"+task.id}
              data-bs-toggle="modal"
              
              >{task.task}</button>
              
          </div>
          <div className="col-2">
            {task.limit}
          </div>
          <div className="col-3">
            {task.location}
            </div>
          <div className="col">
          </div>
        </div>
        </>

    )
}

ListItem.propTypes = {
  task: PropTypes.object.isRequired
}


export default ListItem