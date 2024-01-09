import React from "react";


const Users = ({users, things}) => {
    return(
        <div>
            <h1>Sweet Crave</h1>
            <h3>{users.length} CELEBS craved today!</h3>
            <ul>
            {

                    users.map((user) => {
                        const userThings = things.filter((thing) => {return thing.user_id === user.id})
                        return(
                            <li key={user.id}>
                                {user.name}
                                ({userThings.length})
                            </li>
                        )

                    })


            }
            </ul>
        </div>
    )
}

export default Users