import React from 'react';
import './App.css';
import Accordion from "./componets/Accordion/Accordion";
import {Rating} from "./componets/Rating/Rating";

/*function hello() {
    alert("Hello")
}*/

/*hello();*/


//function declaration

function App() {
    console.log("App rendering")
    return (
        <div>
            {/*Hello*/}
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
        </div>);
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return (
       <h1>{props.title}</h1>
    );
}

export default App;
