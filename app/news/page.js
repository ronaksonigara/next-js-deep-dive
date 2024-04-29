import Link from "next/link";

export default function NewsPage() {
    return <>
        <h1>News Page</h1>
        <ul>
            <li><Link href="/news/1" >1 news</Link></li>
            <li><Link href="/news/2" >2 news</Link></li>
            <li><Link href="/news/3" >3 news</Link></li>
            <li><Link href="/news/4" >4 news</Link></li>

        </ul>
    </>
}