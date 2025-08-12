import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './schemas/student.schema';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async create(@Body() student: Student) {
    return this.studentsService.create(student);
  }

  @Get()
  async getAll() {
    return this.studentsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.studentsService.getById(id);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() student: Student) {
    return await this.studentsService.update(id, student);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.studentsService.delete(id);
  }
}
