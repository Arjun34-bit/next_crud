import connectDB from "@/libs/mongoDB";
import Topic from "@/modals/topic";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectDB();
  const res = await Topic.findByIdAndDelete({ id });
  return NextResponse.json({ message: "Topic Deleted" });
}
