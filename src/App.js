function App() {
  return (
    <div className="todoapp stack-large">
     <h1>Todo List</h1>
     <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input 
      type="text"
      id="new-todo-input"
      className="input input__lg"
      name="text"
      autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toogle-btn" aria-pressed="true">
          <span className="visually-hidden">Show</span>
          <span> all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toogle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul 
        role="list" 
        className="todo-list stack-large stack-exception" 
        aria-labelledby="list-heading">
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-0" type="checkbox" defaultChecked={true} />
              <label className="todo-label" htmlFor="todo-0">Code</label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Code</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Code</span>
              </button>
            </div>
          </li>

          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-1" type="checkbox" defaultChecked={true} />
              <label className="todo-label" htmlFor="todo-1">Walk</label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Walk</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Walk</span>
              </button>
            </div>
          </li>

          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-2" type="checkbox" defaultChecked={true} />
              <label className="todo-label" htmlFor="todo-2">Repeat</label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Repeat</span>
              </button>
              <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">Repeat</span>
              </button>
            </div>
          </li>
      </ul>
     </form>
    </div>
  );
}

export default App;
