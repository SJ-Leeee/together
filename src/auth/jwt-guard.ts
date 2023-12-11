import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext): Promise<any> {
    try {
      const result = await super.canActivate(context);
      console.log('JwtAuthGuard - canActivate result:', result);
      return result;
    } catch (error) {
      console.error('JwtAuthGuard - Error:', error);
      throw error;
    }
  }
}
