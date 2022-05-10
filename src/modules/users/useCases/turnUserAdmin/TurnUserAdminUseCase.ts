import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userById = this.usersRepository.findById(user_id);
    if(!userById) {
      throw new Error("User does not exist");
    }
    return this.usersRepository.turnAdmin(userById); //<< The 'turnAdmin' method returns an user
  }
}

export { TurnUserAdminUseCase };
