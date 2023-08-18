import { Nunito_Sans } from 'next/font/google'

import RightSidebar from "./components/RightSidebar"
import LeftSidebar from "./components/LeftSideBar";
import Header from "./components/Header";
import Chat from "./components/Chat";

const font = Nunito_Sans({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className={font.className}>
      <div className="h-screen flex flex-col bg-gray-3 text-text-gray">
        <div className="flex flex-1 h-full">
          <LeftSidebar/>
          <div className="h-full w-full">
            <Header/>
            <div className="flex">
              <Chat/>
              <RightSidebar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
