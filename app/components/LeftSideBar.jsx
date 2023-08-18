import { LuChevronDown } from "react-icons/lu";
import ServersBar from "./ServersBar";
import Category from "./Category";
import Channel from "./Channel";

const LeftSidebar = ({ }) => {

    return (
        <aside className="w-96 bg-gray-5 flex">
            <ServersBar/>
            <div className="h-full w-full">
              <div className="h-12 mb-3 flex items-center place-content-between pl-3 pr-4 text-white border-b-2 border-gray-6 w-full">
                <h1 className="font-semibold">PCR</h1>
                <div className="text-xl"><LuChevronDown/></div>
              </div>
              <Category />
              <Channel />
              <Channel />
              <Category />
              <Channel />
            </div>
          </aside>
    )
}

export default LeftSidebar;