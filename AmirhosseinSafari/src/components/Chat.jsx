import Navbar from './Navbar';
import Message from './Message';
import Input from './Input';
const Chat = () => {
    return (
        <>
            <div className="px-3 col-start-1 col-span-3 lg:col-start-2 lg:col-span-2">
                <Navbar />
                <Message />
                <Input />
            </div>

        </>
    )
}

export default Chat;