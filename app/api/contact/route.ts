import { NextResponse } from 'next/server';

const NOTION_DB_ID = process.env.NOTION_DATABASE_ID ?? 'd0304717371c45768a2ee42779dd7da5';
const NOTION_API_KEY = process.env.NOTION_API_KEY ?? '';

interface ContactPayload {
  type: 'pionnier' | 'mecene' | 'praticien';
  prenom: string;
  email: string;
  nom?: string;
  organisation?: string;
  cercle?: string;
  profession?: string;
  ville?: string;
  specialites?: string;
  motivation?: string;
  message?: string;
  rgpd: boolean;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    if (!body.prenom || !body.email || !body.type || !body.rgpd) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 },
      );
    }

    if (!NOTION_API_KEY) {
      console.error('NOTION_API_KEY is not set');
      return NextResponse.json(
        { error: 'Configuration serveur incomplète' },
        { status: 500 },
      );
    }

    const properties: Record<string, unknown> = {
      Prénom: { rich_text: [{ text: { content: body.prenom } }] },
      Email: { email: body.email },
      Type: { select: { name: body.type } },
      Nom: { title: [{ text: { content: body.nom || body.prenom } }] },
    };
    if (body.organisation) {
      properties.Organisation = { rich_text: [{ text: { content: body.organisation } }] };
    }
    if (body.cercle) {
      properties.Cercle = { select: { name: body.cercle } };
    }
    if (body.profession) {
      properties.Profession = { rich_text: [{ text: { content: body.profession } }] };
    }
    if (body.ville) {
      properties.Ville = { rich_text: [{ text: { content: body.ville } }] };
    }
    if (body.specialites) {
      properties.Spécialités = { rich_text: [{ text: { content: body.specialites } }] };
    }
    if (body.motivation) {
      properties.Motivation = { rich_text: [{ text: { content: body.motivation } }] };
    }
    if (body.message) {
      properties.Message = { rich_text: [{ text: { content: body.message } }] };
    }

    console.log('NOTION_API_KEY exists:', !!process.env.NOTION_API_KEY);
    console.log('NOTION_DATABASE_ID:', process.env.NOTION_DATABASE_ID || 'd0304717371c45768a2ee42779dd7da5');
    console.log('Payload type:', body.type, 'email:', body.email);

    const res = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DB_ID },
        properties,
      }),
    });

    const responseText = await res.text();
    console.log('Notion response status:', res.status);
    console.log('Notion response body:', responseText);

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Erreur lors de l\'enregistrement', details: responseText },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 },
    );
  }
}
