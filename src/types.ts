export type PersonDetailsType = {
  id: string;
  name: string;
  birthYear: string | "unknown";
  gender: "male" | "female" | "n/a";
  height: number;
  homeworld: {
    name: string;
    population?: number;
  };
  species?: {
    name: string;
    classification: string;
  };
};

export type PersonDetailsQueryData = {
  person: PersonDetailsType;
};

export type AllPeopleType = {
  id: string;
  name: string;
  birthYear: string | "unknown";
  homeworld: {
    name: string;
  };
}[];

export type AllPeopleQueryData = {
  allPeople: {
    people: AllPeopleType;
  };
};
