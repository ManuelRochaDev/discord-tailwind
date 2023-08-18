import { LuHash } from "react-icons/lu";

const Header = ({ }) => {

    return (
        <header className="h-12 border-b border-gray-6 flex items-center">
              <div className="flex items-center pr-4 border-r border-gray-2">
                <div className="ml-4 mr-2 text-gray-1 text-2xl"><LuHash/></div>
                <h1 className="text-white text-sm font-semibold">geral💂‍♀️</h1>
              </div>
              <div>
                <h2 className="text-gray text-sm ml-4">channel description</h2>
              </div>
            </header>
    )
}

export default Header;