import Link from "next/link";
export default function Timeline() {
  return (
    <>
      <h1>Esto es el timeline</h1>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <style jsx>
        {`
          h1 {
            font-size: 36px;
            color: red;
          }
        `}
      </style>
    </>
  );
}
