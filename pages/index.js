import Link from "next/link";

export async function getServerSideProps() {
  return {
    props: {
      test: 1143
    }
  };
}

export default function IndexPage(props) {
  const { test } = props;

  console.log(test);

  return (
    <div>
      Hello World. {test}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
