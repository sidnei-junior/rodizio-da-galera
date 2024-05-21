import { Controller } from './protocols/controller'
import { HttpRequest, HttpResponse } from './protocols/http'

export class SignUpController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
      }
    }

    return {
      statusCode: 400,
    }
  }
}
