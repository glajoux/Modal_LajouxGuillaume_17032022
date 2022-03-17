# GL-React-Modal

This component must work with a react project like [Create React App](https://github.com/facebook/create-react-app).

## Install component

In the project directory, you can run:

`npm i modal-gl-component`

or

`yarn add test-modale-gl`

### How to use this component

1. First import Modal (import { Modal } from "modal-gl-component/dist/index")

2. In the component where you will use it, you must have :

   - state (withe the React Hook useState)
   - a close function

3. Add the module where you want to use it.

For example :

```
export default function AppTest () {
    const [modal, setModal] = useState(false)
    const closeModal = () => {
        setModal(!modal)
    }

    return (
        <Modal
            state={modal}
            close={closeModal}
        >
    )
}
```

Homepage: [https://github.com/glajoux/Modal_LajouxGuillaume_17032022](https://github.com/glajoux/Modal_LajouxGuillaume_17032022)
