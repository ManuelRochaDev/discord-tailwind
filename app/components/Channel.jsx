import { LuChevronDown, LuHash } from "react-icons/lu";

const Channel = () => {
    return (
        <div className="flex h-8 items-center hover:bg-gray-4 text-text-gray hover:text-gray rounded-md mx-2">
            <div className="ml-1 mr-1 text-md"><LuHash/></div>
            <div className="text-sm">general</div>
        </div>
    )
}

export default Channel;