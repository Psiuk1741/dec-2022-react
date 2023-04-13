import './App.css'
// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
//
//
//
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
//
//
// #Advance
//
// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)
import Posts from "./components/Posts/Posts";
import {useState} from "react";
import FullPost from "./components/FullPost/FullPost";
import Shuttles from "./components/Shuttles/Shuttles";
import Users from "./components/Users/Users";

function App() {

    let [chosenPost, setChosenPost] = useState(null);

    const lift = (obj) => {
        setChosenPost({...obj})
    }


    return (

        // <div className={'wrap'}>
        //
        //     <div className={'left-side'}>
        //         <Posts lift={lift}/>
        //     </div>
        //     {
        //         chosenPost
        //         &&
        //         (<div className={'right-side'}>
        //             <FullPost value={chosenPost}/>
        //         </div>)
        //     }
        // </div>


        // <div>
        //     <Shuttles/>
        // </div>

        <div>

            <Users/>

        </div>
    );
}

export default App;
