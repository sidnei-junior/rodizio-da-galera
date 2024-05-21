import { Controller } from './protocols/controller'
import { HttpRequest, HttpResponse } from './protocols/http'

export class SignUpController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    console.log('httpRequest', httpRequest)
    return {
      statusCode: 400,
      body: new Error('Missing param: name'),
    }
  }
}
