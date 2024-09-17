function Todoitem2(){

  let todoNme="Go to college";
  let todoDate="4/05/2024";
  return  <div className="container ">
  <div className="row avi-row">
    <div className="col-6">
      {todoNme}
    </div>

    <div className="col-4">
      {todoDate}
    </div>

    <div className="col-2">
      <button className="btn btn-danger avi-btn">Delete</button>
    </div>
  </div>
  </div>

}
export default Todoitem2;