export default function EditTopic() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Enter Title "
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        placeholder="Enter Description"
        className="border border-slate-500 px-8 py-2"
      />
      <button className="bg-green-500 py-2 px-4 w-fit text-white font-bold">
        Edit Topic
      </button>
    </form>
  );
}
