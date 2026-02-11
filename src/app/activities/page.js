import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function ActivitiesPage() {
  const postsDirectory = path.join(process.cwd(), "content/activities");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  return (
    <div style={{ padding: "40px" }}>
      <h1>활동내용</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "20px" }}>
            <Link href={`/activities/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
