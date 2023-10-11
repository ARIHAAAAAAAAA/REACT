import { useRef } from "react";
import useLocalStorage from "../custom Hooks/Hooks";

const Local = () => {

    const [input, setInput,removeStoredValue, print] = useLocalStorage('', '');

    const refInputKey = useRef<HTMLInputElement>(null)
    const refInputValue = useRef<HTMLInputElement>(null)

    return (
        <div style={{ display: "grid", placeItems: "center" }}>
            {/* <h1 style={{ color: "green" }}>GeekForGeeks</h1> */}
            <h2>useLocalStorage</h2>
            {/* <h4>Count - {count}</h4> */}
            <input ref={refInputKey} type="text" placeholder="key"/>
            <input ref={refInputValue} type="text" placeholder="value" />
            <button onClick={() => setInput(refInputKey.current?.value, refInputValue.current?.value)}>
                Set Value
            </button>
            <button onClick={()=>removeStoredValue(refInputKey.current?.value)}>delete</button>
            <button onClick={()=>print()}>print</button>
        </div>
    );
};

export default Local;
