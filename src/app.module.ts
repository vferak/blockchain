import { Module } from '@nestjs/common';
import { GenerateCommand } from './generate.command';

@Module({
  imports: [],
  providers: [GenerateCommand],
})
export class AppModule {}
