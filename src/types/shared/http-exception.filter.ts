import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Catch } from "@nestjs/common";

@Catch{}
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        throw new Error("Method not implemented.");
    }
    Catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus ? exception.getStatus()
         : HttpStatus.INTERNAL_SERVER_ERROR;

         const errorResponse = {
            code: status,
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method,
            message: 
            status !== HttpStatus.INTERNAL_SERVER_ERROR ? 
             exception.message.error || exception.message ||
             null 
             : 'Internal Serve Error',
         };

         return response.status(status).json(errorResponse);
    }
}

