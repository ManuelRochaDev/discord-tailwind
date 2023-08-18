import roles from "@/app/data/roles.json"

const Role = ({ text }) => {

    return (
        <div className="text-gray text-xs font-semibold ml-2 mt-5">{text}</div>
    )
}

export default Role;