import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IndexController } from './Controllers/index.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.cgcfjcf.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [IndexController],
  providers: [],
})
export class AppModule {}
