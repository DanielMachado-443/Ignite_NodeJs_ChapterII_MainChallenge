import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {} // << It refers to the all application SAME repository

  execute({ user_id }: IRequest): User[] {
    const User = this.usersRepository.findById(user_id);

    if (User !== undefined) {
      if (!User.admin) {
        throw new Error("This user is not an admin");
      } else {
        return this.usersRepository.list(); // << We could have a problem here
      }
    } else {
      throw new Error("This is not a valid user");
    }
  }
}

export { ListAllUsersUseCase };
