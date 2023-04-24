import {Link, Route, Routes} from "react-router-dom";
import TodosPage from "./pages/TodosPage/TodosPage";
import AlbumsPage from "./pages/TodosPage/AlbumsPage";
import CommentsPage from "./pages/TodosPage/CommentsPage";
import Post from "./components/Post/Post";

function App() {
  return (
    <div>
        <div>
            <h2>Menu</h2>
            <ul>
                <li>
                    <Link to={'/todos'}>todos</Link>
                </li>
                <li>
                    <Link to={'/albums'}>albums</Link>
                </li>
                <li>
                    <Link to={'/comments'}>comments</Link>
                </li>
            </ul>
            
        </div>

        <div>
            <Routes>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Post/>}/>
                </Route>

            </Routes>
        </div>
    </div>
  );
}

export default App;
