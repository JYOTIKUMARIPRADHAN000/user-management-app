import axios from "axios";
import type { User } from "../types/user.types";

const API = "http://localhost:4000/users";

export const getUsers = async () => (await axios.get<User[]>(API)).data;

export const getUser = async (id: string) =>
  (await axios.get<User>(`${API}/${id}`)).data;

export const createUser = async (data: User) =>
  (await axios.post(API, data)).data;

export const updateUser = async (id: string, data: User) =>
  (await axios.put(`${API}/${id}`, data)).data;

export const deleteUser = async (id: number) =>
  await axios.delete(`${API}/${id}`);
