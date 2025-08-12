import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI ||
        'mongodb+srv://dulmikaushalya02:3Va6PVRaygRRSHxO@cluster0.in13kj1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    StudentsModule,
  ],
})
export class AppModule {}
