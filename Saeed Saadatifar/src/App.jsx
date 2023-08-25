import ChatPage from "./ChatPage"
import FormAuth from "./FormAuth"

export default function App(){
    return(
        <>
        {localStorage.username && <ChatPage/>}
        {!localStorage.username && <FormAuth/>}
        </>
    )
}