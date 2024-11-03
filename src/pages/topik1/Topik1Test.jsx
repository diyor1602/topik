import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Headphones,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Volume2,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function Topik1Test() {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState(
    new Array(80).fill(false)
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const startTest = () => {
    setTestStarted(true);
  };

  const goToQuestion = (index) => {
    setCurrentQuestion(index);
    setSelectedAnswer("");
    setIsPlaying(false);
  };

  const nextQuestion = () => {
    if (currentQuestion < 79) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setIsPlaying(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer("");
      setIsPlaying(false);
    }
  };

  const handleAnswerSelect = (value) => {
    setSelectedAnswer(value);
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);
  };

  const playAudio = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 5000);
  };

  useEffect(() => {
    if (currentQuestion < 40) {
      playAudio();
    }
  }, [currentQuestion]);

  const renderQuestionGrid = (start, end) => {
    return (
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: end - start + 1 }, (_, i) => i + start).map(
          (num) => (
            <Button
              key={num}
              variant={answeredQuestions[num - 1] ? "default" : "outline"}
              className={`w-full ${
                currentQuestion === num - 1 ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => goToQuestion(num - 1)}
            >
              {num}
            </Button>
          )
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            TOPIK I Mock Test
          </h1>
          <Button variant="outline" className="text-red-600 hover:bg-red-50">
            Exit Test
          </Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {!testStarted ? (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Welcome to the TOPIK I Full Mock Test
            </h2>
            <p className="mb-4 text-gray-600">
              This mock test simulates the actual TOPIK I exam. It consists of
              two sections: Listening and Reading.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>Total Questions: 80 (40 Listening, 40 Reading)</li>
              <li>
                Time Limit: 100 minutes (Listening: 40 minutes, Reading: 60
                minutes)
              </li>
              <li>
                Scoring: Each question is worth 1 point, for a total of 100
                points per section
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Instructions:
            </h3>
            <ol className="list-decimal list-inside mb-6 text-gray-600">
              <li>
                Ensure you have a stable internet connection throughout the
                test.
              </li>
              <li>
                For the Listening section, audio will play automatically for
                each question.
              </li>
              <li>
                Read each question carefully before selecting your answer.
              </li>
              <li>
                You can navigate between questions using the provided buttons or
                question grid.
              </li>
              <li>Your progress will be saved automatically as you proceed.</li>
            </ol>
            <Button
              onClick={startTest}
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Start Mock Test
            </Button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                {currentQuestion < 40 ? "Listening Section" : "Reading Section"}
              </h2>
              <div className="flex items-center">
                {currentQuestion < 40 ? (
                  <Headphones className="w-5 h-5 mr-2 text-blue-600" />
                ) : (
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                )}
                <span className="text-sm font-medium text-gray-600">
                  Question {currentQuestion + 1} of 80
                </span>
              </div>
            </div>
            <Progress
              value={((currentQuestion + 1) / 80) * 100}
              className="mb-6"
            />

            <div className="flex justify-between mb-4">
              <Button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Previous
              </Button>
              <Button
                onClick={nextQuestion}
                disabled={currentQuestion === 79}
                className="flex items-center"
              >
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="mb-6">
              {currentQuestion < 40 && (
                <div className="flex items-center mb-4 bg-blue-50 p-3 rounded-md">
                  <Volume2
                    className={`w-6 h-6 mr-2 ${
                      isPlaying
                        ? "text-blue-600 animate-pulse"
                        : "text-gray-400"
                    }`}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {isPlaying
                      ? "Audio is playing..."
                      : "Audio will play automatically"}
                  </span>
                </div>
              )}
              {currentQuestion < 40 ? (
                <p className="text-sm text-gray-600 mb-2">
                  You will hear: "어디에 가요?" (Where are you going?)
                </p>
              ) : (
                <p className="mb-4 text-gray-700">
                  Read the following passage and answer the question:
                </p>
              )}
              <p className="font-medium text-gray-800 mb-4">
                Choose the most appropriate response:
              </p>
              <RadioGroup
                value={selectedAnswer}
                onValueChange={handleAnswerSelect}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="A" id="A" />
                  <Label htmlFor="A">학교에 가요. (I'm going to school.)</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="B" id="B" />
                  <Label htmlFor="B">내일이에요. (It's tomorrow.)</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="C" id="C" />
                  <Label htmlFor="C">사과예요. (It's an apple.)</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="D" id="D" />
                  <Label htmlFor="D">좋아요. (It's good.)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mb-6">
              <Tabs defaultValue="listening">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="listening">Listening (1-40)</TabsTrigger>
                  <TabsTrigger value="reading">Reading (41-80)</TabsTrigger>
                </TabsList>
                <TabsContent value="listening" className="mt-4">
                  {renderQuestionGrid(1, 40)}
                </TabsContent>
                <TabsContent value="reading" className="mt-4">
                  {renderQuestionGrid(41, 80)}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
