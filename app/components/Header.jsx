import { LuHash } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { BsFillPinAngleFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { CgInbox } from "react-icons/cg";
import { BiSolidHelpCircle } from "react-icons/bi";

const Header = ({ }) => {

  const iconClasses = "mr-3 text-gray-1 hover:text-white cursor-pointer"

  return (
    <header className="h-12 border-b border-gray-6 flex place-content-between pl-4 pr-2">
      <div className="h-full flex items-center cursor-pointer w-full">
        <div className="flex items-center pr-4 border-r border-gray-2">
          <div className="mr-2 text-gray-1 text-2xl"><LuHash /></div>
          <h1 className="text-white text-sm font-semibold">geral💂‍♀️</h1>
        </div>
        <div>
          <h2 className="text-gray-1 text-sm ml-4">channel description</h2>
        </div>
      </div>
      <div className="flex items-center">
        <div className={`text-2xl ${iconClasses}`}><LuHash /></div>
        <div className={`text-xl ${iconClasses}`}><FaBell /></div>
        <div className={`text-2xl ${iconClasses}`}><BsFillPinAngleFill /></div>
        <div className={`text-2xl ${iconClasses}`}><MdPeopleAlt /></div>
        <div className="mr-3 flex place-content-between bg-gray-6 h-6 w-36 text-gray-1 rounded-md px-2 text-sm items-center">
          <div>Search</div>
          <div className="text-base"><HiOutlineSearch /></div>
        </div>
        <div className={`text-2xl ${iconClasses}`}><CgInbox /></div>
        <div className={`text-2xl ${iconClasses}`}><BiSolidHelpCircle /></div>
      </div>
    </header>
  )
}

export default Header;