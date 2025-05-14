import Image from 'next/image';

export default function ChatbotProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AI Sustainability Chatbot</h1>
      <h2 className="text-xl text-gray-700 mb-2">RAG-LLM fine-tuned to answer sustainable building related queries.</h2>
      <div className="flex space-x-2 mb-4">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">OpenAI</span>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">LLM</span>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Pinecone</span>
      </div>
      <Image src="/chatbot_picture1.png" alt="AI Sustainability Chatbot" width={600} height={400} className="mb-4" />
      <p className="text-lg text-gray-800">
        Created for a building sustainability company, the AI chatbot takes the complexity out of building sustainability certifications like Green Mark 2021, LEED, and WELLs. By offering technical guidance, providing gap analysis, and even engaging in conversational marketing, it empowers building owners to make smarter, greener decisions.
      </p>
    </div>
  );
}