import React from "react"
// import ItemList from "./functionalComp"
import Counter from "./stateManagement"
// import DataFetcher from "./effecthook"
import Form from "./eventHandling"

const App = () => {
    return <React.Fragment>

        {/* <ItemList items={['Item 1', 'Item 2', 'Item 3']} /> */}
        <Counter />
        {/* <DataFetcher /> */}
        <Form />
    </React.Fragment>

}

export default App