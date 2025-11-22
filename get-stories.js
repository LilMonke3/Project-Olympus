import ZAI from 'z-ai-web-dev-sdk';

async function getDetailedMythologyStories() {
  try {
    const zai = await ZAI.create();
    
    // Kısa hikayeleri olan figürlerin listesi
    const shortStoryFigures = [
      'aphrodite',
      'hercules', 
      'medusa',
      'trojan-war',
      'dionysus',
      'hermes',
      'persephone',
      'psyche',
      'orpheus',
      'atlas',
      'prometheus',
      'cronos',
      'rhea',
      'gaia',
      'uranus'
    ];

    const results = {};

    for (const figure of shortStoryFigures) {
      console.log(`\n=== ${figure.toUpperCase()} ===`);
      
      // Wikipedia'dan bilgi al
      const searchResult = await zai.functions.invoke("web_search", {
        query: `${figure} Greek mythology detailed story Wikipedia`,
        num: 3
      });

      console.log('Search results:', searchResult);

      // Detaylı hikaye oluştur
      const completion = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'Sen bir Yunan mitolojisi uzmanısın. Verilen figürün detaylı mitolojik hikayesini, doğumunu, maceralarını, güçlerini ve önemini anlatan kapsamlı bir metin yaz. Türkçe yaz ve en az 500 kelime olsun.'
          },
          {
            role: 'user',
            content: `Lütfen ${figure} figürünün detaylı Yunan mitolojisi hikayesini anlat.`
          }
        ]
      });

      const detailedStory = completion.choices[0]?.message?.content;
      results[figure] = detailedStory;
      console.log('Generated story:', detailedStory?.substring(0, 200) + '...');
    }

    return results;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Fonksiyonu çalıştır
getDetailedMythologyStories().then(results => {
  console.log('\n=== ALL RESULTS ===');
  console.log(JSON.stringify(results, null, 2));
});