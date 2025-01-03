export type TService = {
  title: string;
  description?: string;
  icon?: string;
};

export type TSocialNetwork = {
  title: string;
  url: string;
  description?: string;
  icon?: string;
};
export type TContactPayload = {
  email: string;
  service: string;
  message: string;
};
