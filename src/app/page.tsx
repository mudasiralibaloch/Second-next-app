import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Wellcome Home!</h1>
    <br />


      <Link href="/HomePage">Go to Home page</Link><br/>
      <Link href="/NamePage">Go to Name page</Link>
    </div>
      );
}
