import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ShowUserByEmailController } from "./ShowUserByEmailController";
import { ShowUserByEmailUseCase } from "./ShowUserByEmailUseCase";

const usersRepository = UsersRepository.getInstance();
const showUserByEmailUseCase = new ShowUserByEmailUseCase(usersRepository);
const showUserByEmailController = new ShowUserByEmailController(showUserByEmailUseCase);

export { showUserByEmailController };
