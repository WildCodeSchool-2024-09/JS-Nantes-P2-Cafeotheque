export interface UserModel {
  [username: string]: {
    username: string;
    password: string;
    email: string;
    likedCoffees: number[];
  };
}
