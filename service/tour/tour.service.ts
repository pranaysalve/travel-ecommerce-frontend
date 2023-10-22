import api from "@/utils/api";

export const GetAllTours = async () => {
  return api.get("/tours");
};

export const GetSingleTour = async (id: string) => {
  return api.get(`/tours/${id}`);
};
