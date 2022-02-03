// function DateDisplay() {
//     return (
//       <div className="DateDisplay">
//         DateDisplay
//       </div>
//     );
// }
  
// export default DateDisplay;


import axios from "axios";
import React from "react";
// import ReactTable from "react-table"; 

const baseURL = "https://www.gov.uk/bank-holidays.json";

export default function DateDisplay() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
    //   setPost(response.data);
      setPost(response.data["england-and-wales"].events);
    //   console.log(response.data["england-and-wales"])
    //   console.log(response.data["england-and-wales"].division)
    console.log(response.data["england-and-wales"].events)
    });
  }, []);

  if (!post) return null;


//   const columns = [{  
//     Header: 'Name',  
//     accessor: 'title'  
//     },{  
//     Header: 'Age',  
//     accessor: 'date'  
//     }]

  return (
    <div>
      <div className="dateFilterDiv">
        <button>Yesterday</button>
        <button>Last Week</button>
        <button>Last Month</button>
        <button>Date1</button>
        <button>Date2</button>
      </div>

        <br/><br/>


        {/* <ReactTable  
                  data={post}  
                  columns={columns}  
                  defaultPageSize = {2}  
                  pageSizeOptions = {[2,4, 6]}  
              /> */}


        {/* <div className="users">
      {post.map((user) => (
        <div className="user">{user.title}</div>
      ))}
    </div> */}



    <table>
  <tr>
    <th>Title</th>
    <th>Date</th>
  </tr>

  <div className="users">
      {post.map((user) => (
          <tr>
          <td>{user.title}</td>
          <td>{user.date}</td>
        </tr>
      ))}
    </div>

  

</table>
      
    </div>
  );
}
  