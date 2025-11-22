import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { figureName } = await request.json();
    
    if (!figureName) {
      return NextResponse.json({ error: 'Figure name is required' }, { status: 400 });
    }

    const zai = await ZAI.create();
    
    // Wikipedia'dan bilgi al
    const searchResult = await zai.functions.invoke("web_search", {
      query: `${figureName} Greek mythology detailed story Wikipedia`,
      num: 3
    });

    console.log('Search results for', figureName, ':', searchResult);

    // Detaylı hikaye oluştur
    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'Sen bir Yunan mitolojisi uzmanısın. Verilen figürün detaylı mitolojik hikayesini, doğumunu, maceralarını, güçlerini ve önemini anlatan kapsamlı bir metin yaz. Türkçe yaz ve en az 500 kelime olsun.'
        },
        {
          role: 'user',
          content: `Lütfen ${figureName} figürünün detaylı Yunan mitolojisi hikayesini anlat.`
        }
      ]
    });

    const detailedStory = completion.choices[0]?.message?.content;
    
    return NextResponse.json({ 
      success: true, 
      figureName, 
      story: detailedStory,
      searchResults: searchResult 
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch story', 
      details: error.message 
    }, { status: 500 });
  }
}