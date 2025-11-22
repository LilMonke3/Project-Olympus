// Test the API endpoint
async function testGetStory() {
  try {
    const response = await fetch('http://localhost:3000/api/get-story', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ figureName: 'aphrodite' })
    });

    const result = await response.json();
    console.log('Result:', result);
    
    if (result.success) {
      console.log('Story length:', result.story?.length);
      console.log('Story preview:', result.story?.substring(0, 300) + '...');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

testGetStory();