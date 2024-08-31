import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, X } from 'lucide-react';

const API_URL = 'https://api.stability.ai/v2beta/stable-image/generate/ultra;
const API_KEY = 'sk-qgFdciW3STM8RFiBs3xehi4fQUA2NWfC7zBuJCxD3k89qXow'; // Replace with your actual API key

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  const generateImage = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          text_prompts: [{ text: prompt }],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          steps: 30,
          samples: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      const newImage = `data:image/png;base64,${data.artifacts[0].base64}`;
      setImage(newImage);
      setHistory(prevHistory => [...prevHistory, { prompt, image: newImage }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const removeFromHistory = (index) => {
    setHistory(prevHistory => prevHistory.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto mb-8">
        <CardHeader>
          <CardTitle>Image Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Button onClick={generateImage} disabled={loading || !prompt}>
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Generate Image
            </Button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {image && (
            <div className="mt-4">
              <img src={image} alt="Generated" className="w-full rounded-lg" />
            </div>
          )}
        </CardContent>
        <CardFooter className="text-sm text-gray-500">
          Powered by Stable Diffusion API
        </CardFooter>
      </Card>

      {history.length > 0 && (
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Generation History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {history.map((item, index) => (
                <div key={index} className="relative">
                  <img src={item.image} alt={item.prompt} className="w-full rounded-lg" />
                  <p className="mt-2 text-sm text-gray-600">{item.prompt}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white bg-opacity-50 hover:bg-opacity-75"
                    onClick={() => removeFromHistory(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
