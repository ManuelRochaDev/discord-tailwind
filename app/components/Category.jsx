import { LuChevronDown, LuPlus } from "react-icons/lu";

const Category = () => {
    return (
        <div className="ml-1 mr-4 mt-4">
            <div className="flex items-center place-content-between">
                <div className="flex text-xs font-semibold text-text-gray items-center">
                    <div className="mr-1"><LuChevronDown/></div>
                    <div className="">ENTRADA</div>
                </div>
                <div className="text-lg text-text-gray"><LuPlus/></div>
            </div>
        </div>
    )
}

export default Category;