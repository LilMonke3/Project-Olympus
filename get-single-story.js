import ZAI from 'z-ai-web-dev-sdk';

async function getStoryForFigure(figureName) {
  try {
    const zai = await ZAI.create();
    
    console.log(`\n=== ${figureName.toUpperCase()} ===`);
    
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
    console.log('Generated story length:', detailedStory?.length);
    return detailedStory;
  } catch (error) {
    console.error('Error for', figureName, ':', error.message);
    return null;
  }
}

// Test with one figure first
getStoryForFigure('aphrodite').then(story => {
  console.log('\n=== APHRODITE STORY ===');
  console.log(story);
});