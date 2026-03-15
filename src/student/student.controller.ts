import { Controller, Get } from '@nestjs/common';

@Controller('student')
export class StudentController {

    @Get()
    getStudent(){
        return 'this data is from Student'
    }
}
