export default function BlogPostPage({ params }) {
  //NextJs에서 파라미터를 넘겨줌
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p> {/*post-1, post-2*/}
    </main>
  );
}
