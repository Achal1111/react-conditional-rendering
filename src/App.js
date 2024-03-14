import Show from "./Show";

function App() {
  return (
    <div className="App">
      <Show>
        <Show.when condition={true}>
          <p>Render this when condition1 is true</p>
        </Show.when>
        <Show.when condition={true}>
          <p>Render this when condition 2 is true</p>
        </Show.when>
        <Show.else>
          <p>Render this when all conditions are false</p>
        </Show.else>
      </Show>
    </div>
  );
}

export default App;
