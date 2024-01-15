"use client";

import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) {
        throw new Error("Topic addition Failed");
      }

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Enter Topic Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Enter Topic Decription"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-green-500 py-4 px-2 w-fit text-white font-bold"
        onClick={addTopics}
      >
        Add Topic
      </button>
    </form>
  );
}
