import { ChangeEvent, useReducer, useRef } from "react";

interface IState {
  counter: number;
  step: number;
}
interface IAction {
  type: string;
  step?: number;
}

function reducer(prevState: IState, action: IAction): IState {
  switch (action.type) {
    case "stop":
      return { ...prevState, counter: 0 };
    case "inc":
      return { ...prevState, counter: prevState.counter + prevState.step };
    case "step":
      return { ...prevState, step: action.step ?? 1 };
    default:
      return prevState;
  }
}

function Timer() {
  const [state, dispatch] = useReducer(reducer, { counter: 0, step: 1 });
  const timer = useRef<number>();

  function handleStart() {
    timer.current = setInterval(() => dispatch({ type: "inc" }), 1000);
  }

  function handleStop() {
    clearInterval(timer.current);
    dispatch({ type: "stop" });
  }

  function handleStep(event: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "step", step: Number(event.target.value) });
  }

  return (
    <div>
      <div style={{ fontSize: "3rem" }}>{state.counter}</div>
      <button type="button" onClick={handleStart}>
        Start
      </button>
      <button type="button" onClick={handleStop}>
        Stop
      </button>
      <input value={state.step} onChange={handleStep} type="number" min="1" />
    </div>
  );
}

export default Timer;
