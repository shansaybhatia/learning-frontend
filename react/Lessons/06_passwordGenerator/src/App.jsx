import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useReducer,
} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();
  const [copyStatus, setCopyStatus] = useState("idle");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzx";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
    setCopyStatus("idle");
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPassword = useCallback(async () => {
    passwordRef.current?.select();
    if (!password || !navigator.clipboard) {
      setCopyStatus("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(password);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }, [password]);
  return (
    <>
      <div className="mx-auto mt-8 w-[calc(100%-3rem)] max-w-4xl rounded-2xl bg-gray-800 px-7 py-8 shadow-md">
        <h1 className="mb-7 text-center text-3xl font-normal text-white">
          Password generator
        </h1>
        <div className="mb-5 flex overflow-hidden rounded-2xl shadow">
          <input
            type="text"
            value={password}
            className="h-16 w-full bg-white px-6 text-3xl text-gray-800 outline-none placeholder:text-gray-400"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className={`shrink-0 px-5 font-medium text-white outline-none transition-colors ${
              copyStatus === "copied"
                ? "bg-emerald-500"
                : copyStatus === "error"
                  ? "bg-red-500"
                  : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {copyStatus === "copied"
              ? "Copied!"
              : copyStatus === "error"
                ? "Try again"
                : "Copy"}
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 px-1 text-lg text-white">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
        <button
          type="button"
          onClick={passwordGenerator}
          className="mt-6 w-full rounded-xl bg-indigo-500 px-5 py-3 text-lg font-medium text-white transition-colors hover:bg-indigo-600"
        >
          Regenerate password
        </button>
      </div>
    </>
  );
}

export default App;
