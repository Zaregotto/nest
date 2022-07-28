import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UserService {
    private users = [];

    getAll() {
        return this.users;
    }

    getOneUserById(id: string) {
        return this.users.find((user) => user.id == id)
    }

    createUser(user: CreateUserDto) {
        this.users.push({
            ...user,
            id: new Date().valueOf(),
        });
        return user;
    }

    updateUser(date: UpdateUserDto) {
        this.users.push({
            ...date,
            id: new Date().valueOf(),
        });
        return date
    }
    deleteUser(id: string) {
        return this.users.filter((user) => user.id == id)
    }

}
