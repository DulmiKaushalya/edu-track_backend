import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './schemas/student.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async create(data: Partial<Student>): Promise<Student> {
    const student = new this.studentModel(data);
    return student.save();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<Student | null> {
    return this.studentModel.findById(id).exec();
  }

  async update(id: string, data: Partial<Student>): Promise<Student | null> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
