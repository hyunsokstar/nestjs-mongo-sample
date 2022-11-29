    import { Injectable } from '@nestjs/common';

    @Injectable()
    export class CatsService {

        helloCatWorld(): string {
            return 'Hello cat World!';
        }
        
    }