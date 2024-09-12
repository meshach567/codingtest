import React from "react"
// import ItemList from "./functionalComp"
import Counter from "./stateManagement"
// import DataFetcher from "./effecthook"
import Form from "./eventHandling"
import FocusInput from "./ref"

const App = () => {
    return <React.Fragment>

        {/* <ItemList items={['Item 1', 'Item 2', 'Item 3']} /> */}
        
        {/* <DataFetcher /> */}
        <FocusInput />
    </React.Fragment>

}

export default App