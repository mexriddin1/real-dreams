import { NextResponse } from "next/server";

const BACKEND = process.env.NEXT_PUBLIC_BASE_URL || process.env.BACKEND_URL || "http://185.191.141.85:8080";

export async function GET(_req: Request, context: { params: any }) {
    // `context.params` may be a Promise in some Next versions — await to be safe
    const params = await (context?.params ?? {});
    const id = params?.id;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    try {
        const res = await fetch(`${BACKEND}/tours/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        const json = await res.json();
        return NextResponse.json(json, { status: res.status });
    } catch (e) {
        console.error("proxy /api/tours/:id error:", e);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
