import { RouterProvider } from "react-router-dom";
import { routing } from "./services/routing";

function App() {
  return (
    <div>
      <RouterProvider router={routing} />
    </div>
  );
}

export default App;
