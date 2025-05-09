import React from "react";

export default function AboutUs() {
  return (
<div className="glass py-10 px-4 max-w-9xl mx-auto space-y-12">
  <div className="flex flex-col md:flex-row items-center gap-8">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      alt="Фриланс жұмысы"
      className="w-full md:w-1/2 rounded-xl shadow-lg"
    />
    <div className="text-right md:text-left md:w-1/2">
      <h2 className="text-3xl font-bold mb-4">Біз кімбіз?</h2>
      <p className="text-lg text-gray-200 leading-relaxed">
        QuickWork — фрилансер мен тапсырыс берушіні біріктіретін заманауи платформа. 
        Біз әр адамға өз қабілеттерін көрсете алатын мүмкіндік беруді мақсат етеміз.
      </p>
    </div>
  </div>
    
  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
    <img
      src="https://img.forbes.kz/forbes-photobank/media/2024-06-09/a031a7a6-0d66-4aa2-90a1-8d6421836da5.webp"
      alt="Команда жұмысы"
      className="w-full md:w-1/2 rounded-xl shadow-lg"
    />
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold mb-4">Миссиямыз</h2>
      <p className="text-lg text-gray-200 leading-relaxed">
        Біздің миссиямыз — әділ, қауіпсіз, сенімді цифрлық еңбек нарығын құру. 
        Біз сапалы жобалар мен талантты мамандар арасында көпір болғымыз келеді.
      </p>
    </div>
  </div>

  <div className="flex flex-col md:flex-row items-center gap-8">
    <img
      src="https://ile-tany.kz/wp-content/uploads/2020/08/ashy-ty-tan-o-u.jpg"
      alt="Технологиялар"
      className="w-full md:w-1/2 rounded-xl shadow-lg"
    />
    <div className="text-right md:text-left md:w-1/2">
      <h2 className="text-3xl font-bold mb-4">Технология мен сенімділік</h2>
      <p className="text-lg text-gray-200 leading-relaxed">
        QuickWork платформасы заманауи UI/UX принциптерімен, қауіпсіздік пен қарапайымдылықты ескере отырып жасалды. 
        Бізбен бірге болыңыз — болашақ сіздің қолыңызда!
      </p>
    </div>
  </div>
</div>

  );
}
