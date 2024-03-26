import './App.css';
import styled from 'styled-components';
import {NewComponent} from "./components/newComponent";


function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <StyledApp>
            <NewComponent cars={topCars}/>
        </StyledApp>
    )
}

export default App;

const StyledApp = styled.div`

`
