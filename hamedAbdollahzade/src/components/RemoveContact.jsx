export const RemoveContact = () => {
    return (
      <form className="flex flex-col bg-slate-700 text-white h-[150px] w-full overflow-hidden my-4 p-4">
        <h1>Remove Contact</h1>
       
        <label htmlFor="">شماره</label>
        <input type="text" className="border" />

        <button type="button" className="border my-4">REMOVE</button>

      </form>
    );
  };
  