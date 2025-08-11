import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EduStudentModule } from './edu-student/edu-student.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dulmikaushalya02:3Va6PVRaygRRSHxO@cluster0.in13kj1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    EduStudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
