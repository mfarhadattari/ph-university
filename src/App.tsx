import MainLayout from "./components/layout/MainLayout";
import PrivateRoute from "./components/layout/PrivateRoute";

const App = () => {
  return (
    <PrivateRoute>
      <MainLayout />
    </PrivateRoute>
  );
};

export default App;
