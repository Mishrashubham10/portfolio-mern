import AuthContextProvider from "./provider/AuthContextProvider";

const App = () => {
  return (
    <AuthContextProvider>
      <h1 className="bg-red-500">Personal Portfolio..</h1>
    </AuthContextProvider>
  );
};

export default App;