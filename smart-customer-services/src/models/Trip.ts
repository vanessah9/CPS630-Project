import Coordinates from "@/models/Coordinates";

export default interface Trip {
  sourceCode: string;
  location: Coordinates;
  destination: Coordinates;
}
