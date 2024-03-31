import Link from "next/link"//first we import the Link from "next.link":


export default  function HomePage(){
    return (
        <div>
            {/* now for linking we add the linking yag "Link " and give in href ="/"LIke this  */}
            <Link href="/">Back Home</Link>
    <h1>This is the Home Page !</h1>
    </div>
    )
}
