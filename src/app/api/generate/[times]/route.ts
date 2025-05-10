import { NextResponse } from "next/server";
import { generateService } from "../../services/generateService";
import { BodyField } from '../../types/BodyField';

export async function POST(req: Request, { params }: { params: { times: number}}) {
    const { times } = await params;
    const body:BodyField[] = await req.json()

    const response = generateService(body, times)

    if (typeof response === "string") return NextResponse.json({message: response}, {status: 400})

    return NextResponse.json({message: "ok", response})
}