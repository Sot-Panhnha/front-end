import React from "react";

export default function CreateBlogs() {
  return (
    <div className="flex justify-center">
      <div>
        <form>
          <label className=" block">
            <span class="block text-sm font-medium text-slate-700">Title</span>
            <input type='text' className="w-[500px]" />
          </label>
        </form>
        <form>
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">Description</span>
            <input type='text' className="w-[500px] h-64" />
          </label>
        </form>
        <br/>
        <button className="py-2 px-2 rounded bg-slate-500">select file</button>
      </div>
    </div>
  );
}
