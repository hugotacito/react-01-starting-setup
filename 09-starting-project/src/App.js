import UserFinder from "./components/UserFinder";
import UserContext from "./store/user-context";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
function App() {
  const contextValue = { users: DUMMY_USERS };
  return (
    <UserContext.Provider value={contextValue}>
      <UserFinder />
    </UserContext.Provider>
  );
}

export default App;
