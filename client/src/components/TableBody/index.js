import React from "react";
import "./style.css";

function TableBody( props ) {
  
  return (
  <div>
      {props.users.map(user => {
        return (

            <ul>
              <li>
                <img src={user.picture.large} alt='employee'></img>
              </li>
              {/* <li>
                {user.name}
              </li>
              <li>
                {user.phone}
              </li>*/
              <li>
                {user.email}
              </li>
              /*<li>
                {user.id}
              </li> */}
            </ul>

        )
      })}
    </div>
  )
}

export default TableBody;
