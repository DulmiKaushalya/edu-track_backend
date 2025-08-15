import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dulmikaushalya02:3Va6PVRaygRRSHxO@cluster0.in13kj1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    StudentsModule,
    AuthModule,
  ],
  controllers: [AppController], //Registers the controller(s),Handles incoming HTTP request
  providers: [AppService], //egisters services
})
export class AppModule {}
