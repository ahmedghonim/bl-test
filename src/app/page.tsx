import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex justify-center p-20" dir="rtl">
      <h1 className="text-[40px] text-center">
        اشعار ..
        <br />
        عملاءنا الاعزاء ..
        <br />
        نظراً لتحديثات فالنظام سيتم ايقاف البرنامج الفترة الحالية لضمان عدم تأثر
        العمليات الخاصة بمنشأتكم من التحديثات .. <br />
        سيتم ابلاغكم قريباً فور الانتهاء منها ..
        <br />
        تقبلوا تحيات فريق عمل بالثانيه
      </h1>
    </main>
  );
}
