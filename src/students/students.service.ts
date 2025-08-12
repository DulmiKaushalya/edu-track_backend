import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './schemas/student.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('students')
    private studentModel: Model<StudentDocument>,
  ) {}

  async create(students: Student): Promise<Student> {
    const student = new this.studentModel(students);
    return student.save();
  }

  async getAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async getById(id: string) {
    return this.studentModel.findById(id).exec();
  }

  async update(id: string, students: Partial<Student>) {
    return await this.studentModel.findByIdAndUpdate(id, students, {
      new: true,
    });
  }

  async delete(id: string) {
    return await this.studentModel.findByIdAndDelete(id);
  }
}
