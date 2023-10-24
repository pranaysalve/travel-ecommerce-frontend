import api from "@/utils/api";

export const Checkout = (data: object) => api.post('/checkout', { data: data })

export const GetAllBookings = () => api.get('/checkout')