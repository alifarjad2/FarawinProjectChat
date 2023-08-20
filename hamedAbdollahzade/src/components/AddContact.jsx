export const AddContact = () => {
    return (
      <form className="flex flex-col bg-slate-700 text-white h-[200px] w-full overflow-hidden my-4 p-4">
        <h1>AddContact</h1>

        <label htmlFor="">شماره</label>
        <input type="text" className="border" />

        <label htmlFor="">نام </label>
        <input type="text" className="border" />

        <button type="button" className="border my-4">ADD</button>

      </form>
    );
  };
  