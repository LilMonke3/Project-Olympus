import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

interface EnhanceStoryRequest {
  title: string;
  currentStory: string;
  category: string;
}

export async function POST(request: NextRequest) {
  try {
    const { title, currentStory, category }: EnhanceStoryRequest = await request.json();

    if (!title || !currentStory) {
      return NextResponse.json(
        { error: 'Title and current story are required' },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();

    // Wikipedia'dan bilgi çekmek için web search kullan
    const searchQuery = `${title} Greek mythology Wikipedia`;
    const searchResult = await zai.functions.invoke("web_search", {
      query: searchQuery,
      num: 3
    });

    let wikipediaContent = '';
    
    if (searchResult && searchResult.length > 0) {
      // İlk sonuç genellikle en relevant olur
      const firstResult = searchResult[0];
      wikipediaContent = firstResult.snippet || '';
    }

    // Mevcut hikayeyi ve Wikipedia içeriğini birleştirerek daha zengin bir hikaye oluştur
    const prompt = `Sen bir Yunan mitolojisi uzmanısın. Aşağıda verilen karakterin mevcut hikayesini ve Wikipedia'dan alınan ek bilgileri birleştirerek çok daha detaylı, akıcı ve ilgi çekici bir hikaye yaz.

Karakter: ${title}
Kategori: ${category}
Mevcut Hikaye: ${currentStory}

Wikipedia Bilgileri: ${wikipediaContent}

Lütfen aşağıdaki formatlarda bir hikaye yaz:
1. Başlangıç (doğum, köken)
2. Güçleri ve yetenekleri
3. En ünlü hikayeleri ve maceraları
4. Diğer tanrılar/kahramanlarla ilişkileri
5. Sembolleri ve anlamları
6. Roma mitolojisindeki karşılığı
7. Mirası ve etkisi

Hikayeyi Türkçe yaz, akıcı bir dil kullan ve mitolojik detayları zenginleştir. Mevcut hikayenin temel yapısını koru ama çok daha detaylı ve uzun hale getir. Yaklaşık 500-800 kelime arasında olmalı.`;

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'Sen bir Yunan mitolojisi uzmanısın ve hikaye anlatıcısın. Mitolojik karakterlerin hikayelerini zenginleştirmek için Wikipedia ve diğer kaynaklardan aldığın bilgileri kullanarak akıcı, detaylı ve ilgi çekici hikayeler yazarsın.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const enhancedStory = completion.choices[0]?.message?.content;

    if (!enhancedStory) {
      return NextResponse.json(
        { error: 'Failed to generate enhanced story' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      enhancedStory,
      wikipediaInfo: wikipediaContent
    });

  } catch (error: any) {
    console.error('Error enhancing story:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}