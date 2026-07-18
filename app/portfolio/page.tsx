import PortfolioLayoutWrapper from "@/features/Portfolio/components/portfolio-layout-wrapper";
import PortfolioView from "@/features/Portfolio/Views/portfolio-view";

export default function page() {
  return (
    <PortfolioLayoutWrapper>
      <PortfolioView />
    </PortfolioLayoutWrapper>
  );
}
