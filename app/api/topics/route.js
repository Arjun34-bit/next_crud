import connectDB from "@/libs/mongoDB";
import Topic from "@/modals/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const allTopics = await Topic.find({});
  return NextResponse.json({ allTopics });
}
