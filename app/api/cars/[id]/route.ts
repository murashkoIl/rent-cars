import { connectToDatabase } from '@/libs/mongodb';
import Car from '@/models/car';
import { NextResponse } from 'next/server';

export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const newCar = request.json();
  await connectToDatabase();
  await Car.findByIdAndUpdate(id, newCar);
  return NextResponse.json({ message: 'Car updated' }, { status: 200 });
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectToDatabase();
  const car = await Car.findOne({ _id: id });
  return NextResponse.json({ car }, { status: 200 }); 
}