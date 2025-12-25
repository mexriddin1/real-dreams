import axios from "axios";
import { ApiResponse, GalleryItem, PaginatedData } from "../model";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://api.realdreamsuz.com";

export const getAllArticles = async (): Promise<GalleryItem[]> => {
    try {
        const { data } = await axios.get<ApiResponse<GalleryItem[]>>(
            `${BASE_URL}/gallery-items/articles`,
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

export const getAllAdvantages = async (): Promise<GalleryItem[]> => {
    try {
        const { data } = await axios.get<ApiResponse<GalleryItem[]>>(
            `${BASE_URL}/gallery-items/advantages`,
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


