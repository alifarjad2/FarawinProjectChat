import ChatPage from "./ChatPage"
import FormAuth from "./FormAuth"

export default function App(){
    return(
        <>
        {localStorage.token && <ChatPage/>}
        {!localStorage.token && <FormAuth/>}
        </>
    )
}