import { v4 as uuidV4 } from "uuid";
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";

const config: Config = {
  dictionaries: [names],
};

export type Users = {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
};

const randomEmail = (clientName: string) => {
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${clientName}@${randomDomain}`;
};

export const users: Users[] = Array.from({ length: 500 }, (_) => {
  const randomName = uniqueNamesGenerator(config);
  const randomName2 = uniqueNamesGenerator(config);

  return {
    id: uuidV4(),
    nombre: randomName.split(" ")[0],
    apellido: randomName2.split(" ")[0],
    email: randomEmail(randomName),
    telefono: Math.floor(Math.random() * 1000000000).toString(),
  };
});
