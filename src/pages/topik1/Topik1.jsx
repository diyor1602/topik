import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Headphones, Book } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Topik1() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            TOPIK I (Test of Proficiency in Korean)
          </h2>

          <section className="mb-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Kirish
            </h3>
            <p className="text-gray-600 mb-4">
              TOPIK I koreys tilini boshlang'ichdan o'rta darajagacha
              o'rganuvchilar uchun mo'ljallangan. U kundalik hayot uchun zarur
              bo'lgan asosiy muloqot qobiliyatlarini baholaydi va ikkita asosiy
              bo'limga bo'linadi: Tinglash (듣기) va O'qish(읽기).
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Jami savollar: 80 (40 듣기, 40 읽기)</li>
              <li>
                Vaqt nazorati: 100 daqiqa (듣기: 40 daqiqa, 읽기: 60 daqiqa)
              </li>
              <li>Maksimum ball: 200 ball (듣기: 100 ball, 읽기: 100 ball)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Test Qismlari
            </h3>
            <Accordion
              collapsible
              className="bg-white rounded-lg shadow-md"
              type="multiple"
            >
              <AccordionItem value="listening">
                <AccordionTrigger className="px-6 py-4">
                  <div className="flex items-center">
                    <Headphones className="h-6 w-6 mr-2 text-blue-600" />
                    Tinglash Qismi (듣기)
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <p className="text-gray-600 mb-4">
                    Tinglash bo'limi turli kundalik vaziyatlarda koreys tilini
                    tushunish qobiliyatingizni tekshiradi.
                  </p>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    Namuna Savol:
                  </h4>
                  <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <p className="text-gray-700 mb-2">
                      Siz eshitasiz: "어디에 가요?" (Qayerga ketyabsiz?)
                    </p>
                    <p className="text-gray-700 mb-2">
                      Mos keladigan javobni tanlang:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>학교에 가요. (Men maktabga ketyabman.)</li>
                      <li>내일이에요. (Ertaga.)</li>
                      <li>사과예요. (Bu olma.)</li>
                      <li>좋아요. (Yaxshi.)</li>
                    </ul>
                    <p className="text-gray-600 mt-2">
                      To'g'ri javob: 학교에 가요. (Men maktabga ketyabman.)
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="reading">
                <AccordionTrigger className="px-6 py-4">
                  <div className="flex items-center">
                    <Book className="h-6 w-6 mr-2 text-blue-600" />
                    O'qish Qismi (읽기)
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <p className="text-gray-600 mb-4">
                    “O'qish” bo'limi sizning yozma koreys tilini, jumladan,
                    lug'at, grammatika va qisqa matnlarni tushunish
                    qobiliyatingizni baholaydi.
                  </p>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    Namuna Savol:
                  </h4>
                  <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <p className="text-gray-700 mb-2">Quyidagi gapni o'qing:</p>
                    <p className="text-gray-900 font-semibold mb-2">
                      "저는 매일 아침 7시에 ( ) 마셔요."
                    </p>
                    <p className="text-gray-700 mb-2">
                      Qavs ichiga mos keladigan javobni tanlang:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>우유 (sut)</li>
                      <li>책 (kitob)</li>
                      <li>신발 (oyoq kiyim)</li>
                      <li>의자 (stol)</li>
                    </ul>
                    <p className="text-gray-600 mt-2">
                      To'g'ri javob: 우유 (sut)
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              O'z mahoratingizni sinab ko'rishga tayyormisiz?
            </h3>
            <p className="text-gray-600 mb-6">
              Joriy darajangizni baholash va yaxshilanishi kerak bo'lgan
              kamchiliklarizni aniqlash uchun to'liq TOPIK I test sinovidan
              o'ting.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Mock Testni Boshlash
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
