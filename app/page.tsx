import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/custom/Hero";
import { Spacing } from "@/components/custom/Spacing";
import { Header } from "@/components/layout/Header";
import { Status } from "@/components/custom/Status";
import { Skill } from "@/components/custom/Skill";
import { Contact } from "@/components/custom/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <Header />
          <Spacing size="md" />
          <Hero />
          <Spacing size="md" />
          <Status />
          <Spacing size="md" />
          <Skill />
          <Spacing size="md" />
          <Contact />
          <Spacing size="md" />
        </div>
      </Layout>
      <Footer />
    </>
  );
}
