import { Request, Response } from "express";
import { ShowUserByEmailUseCase } from "./ShowUserByEmailUseCase";

class ShowUserByEmailController {
  constructor(private showUserByEmailUseCase: ShowUserByEmailUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email } = request.params;

    const User = this.showUserByEmailUseCase.execute({ email }); 

    return response.json(User);
  }
}

export { ShowUserByEmailController };
