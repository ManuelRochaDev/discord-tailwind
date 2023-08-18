import User from "./User"
import Role from "./Role"

import roles from "@/app/data/roles.json"
import users from "@/app/data/users.json"

const RightSidebar = ({ }) => {

    return (
        <aside className="w-72 bg-gray-5 items-stretch px-2 h-screen">
            {roles.map(role =>
                <>
                    <Role text={role.name + " — " + roles.length} />
                    {users.map(user => {
                        if (user.roleId === role.id) {
                            return <User playing={ user.playing } roleColor={ role.color } />
                        }
                    }
                    )}
                </>
            )}
        </aside>
    )
}

export default RightSidebar;