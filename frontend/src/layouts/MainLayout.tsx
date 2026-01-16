import { Outlet } from "react-router-dom";
import Header from "@/features/navigation/Header";
import Footer from "@/features/navigation/Footer";
import { useIsMobile } from "@/hooks/useIsMobile";

const MainLayout = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <main className="grid place-items-center w-dvw h-dvh">
          {/* <Header /> */}
          <div className="w-full h-fit max-w-175"> {/* Put mt-12 when bringing back header max-h-[100% + 48px]*/}
            <section className="flex flex-col gap-2 p-6 mb-12">
              <Outlet />
            </section>
          </div>
         <Footer/>
        </main>
      ) : (
        <main></main>
      )}
    </>
  );
};

export default MainLayout;
