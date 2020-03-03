import { LoremIpsum } from "lorem-ipsum";
import { uuid } from "uuidv4";

const lorem = new LoremIpsum();

export default function createContact() {
  return {
    id: uuid(),
    name: lorem.generateWords(2)
  };
}
