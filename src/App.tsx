import React from 'react';
import {Box, Button, ButtonContainer, Headline, Image, Text} from "./components/Box";
import imgCard from "./assets/images/img.png"


function App() {
    return (
        <div className="App">
            <Box>
                <Image src ={imgCard}/>
                <Headline> Headline </Headline>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                <ButtonContainer>
                    <Button btnType={"primary"}>See more</Button>
                    <Button btnType={"outlined"}>Save</Button>
                </ButtonContainer>
            </Box>
        </div>
    );
}

export default App;
