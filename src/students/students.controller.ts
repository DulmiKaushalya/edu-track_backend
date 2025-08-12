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
  create(@Body() body: Partial<Student>) {
    return this.studentsService.create(body);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<Student>) {
    return this.studentsService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.studentsService.delete(id);
  }
}
