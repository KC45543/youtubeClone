import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage"
import SearchResult from "./components/SearchResult";

function App() {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path:"watch",
        element: <WatchPage />
      },
      {
        path:"results",
        element: <SearchResult />
      }
    ]
  }])

  return (
    <Provider store={store} >
      
      
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
