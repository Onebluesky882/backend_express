import { Request, Response, request } from "express";
import { UserType } from "../types/userType";

export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export function getUserById(request: Request, response: Response) {
  response.send({});
}

export function createUser(request: Request<UserType>, response: Response) {
  request.query.UserType;
}
