function Form({type}) {
  return (
    <div className="flex items-center place-content-center flex-wrap bg-slate-700 w-[25rem] aspect-[1/1.05] rounded-[1rem] p-4 [&>input]:aspect-[1/0.2] [&>input]:w-[20rem]">
      <p className="text-white text-center font-semibold text-[2.25rem] mb-8">My Account</p>
      <input className="border-none rounded-[1rem] focus:rounded-[0.25rem] p-[0.65rem] bg-slate-600 m-[0.5rem] text-white" type="text" placeholder="Email"></input>
      <input className="border-none rounded-[1rem] focus:rounded-[0.25rem] p-[0.65rem] bg-slate-600 m-[0.5rem] text-white" type="password" placeholder="Password"></input>
      <input className="border-none rounded-[1rem] hover:rounded-[0.25rem] p-[0.65rem] bg-blue-600 m-[0.5rem] text-white focus:outline-none text-center text-3xl font-semibold cursor-pointer" type="button" value={type}></input>
    </div>
  );
}

function App() {
  return (
    <div className="w-screen h-screen p-0 m-0 bg-slate-900 flex items-center place-content-center [&_*]:outline-none [&_*]:transition-all">
      <Form type="Create Account"/>
    </div>
  );
}

export default App;