import HomeLayoutWrapper from "@/features/Home/components/home-layout-wrapper";
import HomePageView from "@/features/Home/Views/home-view";

export default function page() {
  return (
    <>
      <HomeLayoutWrapper>
        <HomePageView />
      </HomeLayoutWrapper>
    </>
  );
}
