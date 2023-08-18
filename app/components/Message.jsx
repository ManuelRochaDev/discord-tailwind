import Image from 'next/image'

const Message = () => {
    return (
        <div className="flex gap-4 ml-4">
            <Image src="/../public/user.png" width={16} height={16} className='h-10 w-10 rounded-full' alt="user"></Image>
            <div>
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-yellow">User</h3>
                    <h4 className="text-xs text-zinc-500">Today at 10:00 PM</h4>
                </div>
                <h3 className="text-white font-light">This is my message</h3>
            </div>
        </div>
    )
}

export default Message;