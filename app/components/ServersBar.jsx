import ServerBubble from "./ServerBubble";
import DirectMessages from "./DirectMessages";

const ServersBar = ({ }) => {

    return (
        <div className="h-full w-24 bg-gray-6 pt-1 flex flex-col items-center">
            <DirectMessages />
            <div className="h-px w-8 bg-gray-3 mb-2"></div>
            <ServerBubble />
            <ServerBubble />
            <ServerBubble />
            <ServerBubble />
            <ServerBubble />
            <ServerBubble />
            <ServerBubble />
            <ServerBubble />
            <ServerBubble />
        </div>
    )
}

export default ServersBar;