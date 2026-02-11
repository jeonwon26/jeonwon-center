import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

const postsDirectory = path.join(process.cwd(), "content/activities");

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(".md", ""),
  }));
}

export default async function ActivityDetailPage({ params }) {
  const { slug } = await params; // ✅ Next 15/16 대응

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return notFound();

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "8px" }}>{data.title}</h1>
      <p style={{ color: "#666", marginTop: 0 }}>{data.date}</p>

      <hr style={{ margin: "24px 0" }} />

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
