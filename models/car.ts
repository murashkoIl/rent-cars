import mongoose, { Schema } from 'mongoose';

const carSchema = new Schema({
  city_mpg: Number,
  class: String,
  combination_mpg: Number,
  cylinders: Number,
  displacement: Number,
  drive: String,
  fuel_type: String,
  highway_mpg: Number,
  make: String,
  model: String,
  transmission: String,
  year: Number
})

const Car = mongoose.models.Car || mongoose.model('Car', carSchema);

export default Car;