import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

// 기본적으로 Next.js의 컴포넌트는 서버 컴포넌트로 작동합니다.
// 서버 컴포넌트는 서버에서 렌더링되며, 클라이언트에 HTML로 전달됩니다.
// 서버 컴포넌트는 데이터를 페칭하고, SEO 최적화에 유리하며, 초기 로드 성능을 향상시킵니다.
// 서버 컴포넌트는 클라이언트 측 상태나 브라우저 관련 API를 직접 사용할 수 없습니다.

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
