type GenericJson = {
  [key: string]:
    | string
    | number
    | boolean
    | GenericJson
    | GenericJson[]
    | any[];
};

export type LottieIconJson = GenericJson;
