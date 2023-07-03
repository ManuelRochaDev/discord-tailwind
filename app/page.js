import Category from './components/Category'
import Message from './components/Message'
import Channel from "./components/Channel"

export default function Home() {
  return (
    <div className="">
      <div className="h-screen flex flex-col bg-zinc-700">
        <div className="flex flex-1 h-full">
          <aside className="w-96 bg-zinc-800 flex">
            <div className="h-full w-20 bg-zinc-900">
              <div className="">teste</div>
            </div>
            <div className="h-full w-full">
              <div className="h-12 mb-3 flex items-center place-content-between pl-3 pr-4 text-white border-b-2 border-zinc-900 w-full">
                <h1 className="font-semibold">PCR</h1>
                <div className="text-2xl">+</div>
              </div>
              <Category />
              <Channel />
              <Channel />
              <Category />
              <Channel />
            </div>
          </aside>
          <div class="h-full w-full">
            <header className="h-12 border-b-2 border-zinc-900 flex items-center">
              <div className="flex">
                <div className="mx-4 text-zinc-400">#</div>
                <h1 className="text-white font-semibold">geral💂‍♀️</h1>
              </div>
              <div className="mx-4 bg-zinc-500 w-px h-6"></div>
              <div>
                <h2 className="text-zinc-300 text-sm">channel description</h2>
              </div>
            </header>
            <div className="flex">
              <main className="bg-zinc-700 flex-row flex-1 space-y-4">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
              </main>
              <aside className="w-72 bg-zinc-800 border-l-2 flex items-stretch">
                ASIDE RIGHT
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
