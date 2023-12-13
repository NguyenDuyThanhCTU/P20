export default function IntroductionPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-[100vw] p:h-[30vh] d:h-[700px] bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/401553348_122095670246122865_5310938418701955895_n.jpg?alt=media&token=3533d61f-f410-49a5-938e-e154aea33f82)] bg-no-repeat bg-cover">
        <div className="w-full h-full bg-[rgba(0,0,0,0.16)]"></div>
      </div>
      {children}
    </>
  );
}
