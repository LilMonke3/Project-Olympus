import ZAI from 'z-ai-web-dev-sdk';

async function getStoriesForFigures() {
  const zai = await ZAI.create();
  
  const figures = ['aphrodite', 'hercules', 'medusa', 'dionysus'];
  const results = {};
  
  for (const figure of figures) {
    try {
      console.log(`Getting story for ${figure}...`);
      
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

      const story = completion.choices[0]?.message?.content;
      results[figure] = story;
      console.log(`${figure} story length:`, story?.length);
      
    } catch (error) {
      console.error(`Error for ${figure}:`, error.message);
      results[figure] = null;
    }
  }
  
  return results;
}

getStoriesForFigures().then(results => {
  console.log('\n=== FINAL RESULTS ===');
  Object.keys(results).forEach(key => {
    console.log(`\n${key.toUpperCase()}:`);
    console.log(results[key]?.substring(0, 200) + '...');
  });
});