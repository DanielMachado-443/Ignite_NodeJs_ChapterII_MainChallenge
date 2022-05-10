import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
}

class ShowUserByEmailUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email }: IRequest): User {
    const User = this.usersRepository.findByEmail(email); //<< It will return the correct user
    if(!User){
      throw new Error("User does not exist");
    }
    return User;
  }
}

export { ShowUserByEmailUseCase };
