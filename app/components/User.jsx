import Image from "next/image"

const User = ({ playing, roleColor }) => {

    const colorVariants = {
        yellow: 'text-yellow',
        red: 'text-red',
      }

    return (
        <div className="flex items-center pl-2 pt-2 pb-3 rounded-lg hover:bg-zinc-700">
            <div className="w-10 h-10">
                <Image src="/../public/user.png" width={16} height={16} className='h-10 w-10 rounded-full' alt="user"></Image>
                <div className="rounded-full bg-green w-4 h-4 relative bottom-4 left-6 border-2 border-gray-5"></div>
            </div>
            <div className="ml-3">
                <div className={`font-semibold ${colorVariants[roleColor]}`}>User</div>
                {playing &&
                    <div>
                        <div className="text-xs text-gray flex items-center whitespace-pre-wrap">Playing
                            {' '}
                            <span className="font-semibold">{playing}</span>
                            {/*will be an icon*/}
                            <span className="ml-1">+</span>
                        </div>


                    </div>
                }
            </div>

        </div>
    )
}

export default User;