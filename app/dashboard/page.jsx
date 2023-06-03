import React from 'react'
import './style.css'
import Image from 'next/image';
import image from "public/logo.png"
import Link from 'next/link';


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-store" });

    if (!res.ok) {

        throw new Error('Failed to fetch data');
    }

    return res.json();
}


const page = async () => {

    const data = await getData()
    console.log(data)
    return (
        <div>


            {
                data.map((item, id) => {
                    return <main key={item.id}>
                        <article>
                            <h2>{item.title}</h2>
                            <Image src={image} width={200} height={200} alt="Blog Post Image" />
                            <p>{item.body}</p>
                            <Link href={`/blog/${item.id}`}>See more</Link>
                        </article>
                    </main>
                })
            }
            <footer>
                <p>&copy; 2023 My Blog. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default page