import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const User = this.usersRepository.findById(user_id); //<< It will return the correct user
    if(!User){
      throw new Error("User does not exist");
    }
    return User;
  }
}

export { ShowUserProfileUseCase };
