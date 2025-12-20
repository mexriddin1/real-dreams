import axios from "axios";
import { ApiResponse, PaginatedData } from "../model";
import { Car, CarBooking } from "../model/car";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllCars = async (page = 1, page_size = 10): Promise<PaginatedData<Car> | null> => {
    try {
        const { data } = await axios.get<ApiResponse<PaginatedData<Car>>>(
            `https://ea61b9b2b725.ngrok-free.app/cars?page=${page}&page_size=${page_size}`,
            {
                validateStatus: () => true,
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "any",
                },
            }
        )
            ;
        return data.data || null;
    } catch (e) {
        console.error("error:", e);
        throw e;
    }
}

export const getTopCars = async (): Promise<Car[]> => {
    try {
        const { data } = await axios.get<ApiResponse<Car[]>>(
            `https://ea61b9b2b725.ngrok-free.app/cars/top`,
            {
                validateStatus: () => true,
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "any",
                },
            }
        )
            ;
        return data.data ?? [];
    } catch (e) {
        console.error("error:", e);
        throw e;
    }
}

export const createBooking = async (model: CarBooking): Promise<boolean> => {
    try {
        console.log("model:", model);

        const { data } = await axios.post<ApiResponse<string>>(
            `https://ea61b9b2b725.ngrok-free.app/car-bookings`,
            model,
            {
                validateStatus: () => true,
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "any",
                },
            }
        )

        return data.status;
    } catch (e) {
        console.error("error:", e);
        throw e;

    }
}


