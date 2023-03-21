import BlogPostCard from "@/components/BlogPostCard";
import Layout from "@/components/Layout";
import TagButton from "@/components/TagButton";
import { Input, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Layout>
        <Text mb={2}>Search</Text>
        <Input mb={5} />
        <TagButton mb={16} />
        <BlogPostCard />
      </Layout>
    </>
  );
};

export default Home;
