import React from "react";
import "./style.css";

function TableBody( props ) {
  
  return (
  <div>
      {props.users.map(user => {
        return (

            <tr>
              <td>
                <img src={user.picture.large} alt='employee'></img>
              </td>
              <td>
                {user.name.title}
              </td>
              <td>
                {user.name.first}
              </td>
              <td>
                {user.name.last}
              </td>
             <td>
               {user.email}
             </td>
             <td>
               {user.phone}
             </td>
             
             
            </tr>

        )
      })}
    </div>
  )
}

export default TableBody;
