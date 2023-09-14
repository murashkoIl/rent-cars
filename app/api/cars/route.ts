import { connectToDatabase } from '@/libs/mongodb';
import Car from '@/models/car';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
  const car = await request.json();
  await connectToDatabase();
  await Car.create(car);
  return NextResponse.json({ message: 'Car created' }, { status: 201 });
};

export async function GET() {
  await connectToDatabase();
  const cars = await Car.find();
  return NextResponse.json({ cars });
};

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToDatabase();
  await Car.findByIdAndDelete(id);
  return NextResponse.json({ message: "Car deleted" }, { status: 200 })
}