import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return (
      next
        .handle()
        // .pipe(tap(() => console.log(`After...${Date.now() - now}ms`)));
        .pipe(
          map((data) => ({
            success: true,
            data,
          })),
        )
    );
  }
}
