import { Controller } from './protocols/controller'
import { HttpRequest, HttpResponse } from './protocols/http'

export class SignUpController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new Error(`Missing param: ${field}`),
        }
      }
    }

    return {
      statusCode: 0,
    }
  }
}
