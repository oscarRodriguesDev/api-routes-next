import { NextResponse } from "next/server";
const tarefas=['arrumar casa', 'lavar banheiro', 'limpar a mesa']


export async function GET(request:Request){
    return  NextResponse.json({tarefas:tarefas})
}

export async function POST(request:Request){
   const data = await request.json()
  tarefas.push(data.name)
   return NextResponse.json({tarefas:tarefas})
}


// http://localhost/api?index=1
export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url);
    const index = searchParams.get('index');
    const data = await request.json();
    tarefas[Number(index)] = data.name;

    return NextResponse.json({ tarefas: tarefas });
}


// http://localhost/api?index=1

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const index = searchParams.get('index');

    if (index !== null) {
        const indexNumber = Number(index);
        if (indexNumber >= 0 && indexNumber < tarefas.length) {
            tarefas.splice(indexNumber, 1); // Remove um elemento no índice específico
        }
    }

    return NextResponse.json({ tarefas: tarefas });
}
