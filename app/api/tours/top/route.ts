import { NextResponse } from "next/server";

const BACKEND = process.env.NEXT_PUBLIC_BASE_URL || process.env.BACKEND_URL || "http://185.191.141.85:8080";

export async function GET() {
    try {
        const res = await fetch(`${BACKEND}/tours/top`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        const json = await res.json();
        return NextResponse.json(json, { status: res.status });
    } catch (e) {
        console.error("proxy /api/tours/top error:", e);
        return NextResponse.json({ data: [] }, { status: 500 });
    }
}
