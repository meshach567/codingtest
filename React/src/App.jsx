import React from "react"
// import ItemList from "./functionalComp"
import Counter from "./stateManagement"
import DataFetcher from "./effecthook"

const App = () => {
    return <React.Fragment>

        {/* <ItemList items={['Item 1', 'Item 2', 'Item 3']} /> */}
        <Counter />
        <DataFetcher />
    </React.Fragment>

}

export default App