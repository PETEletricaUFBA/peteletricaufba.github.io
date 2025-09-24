import Image from '../lib/Image';

export default function BlogSignature(author: any, index: number): JSX.Element {
    author = author.author;
    return (
        <div className="authorbio" key={index.toString()}>
            <div className="authorimage">
                <Image src={author.image} alt={author.name} layout='responsive' height="100%" width="100%" objectFit="cover" />
            </div>
            <div className="authorcontent">
                <div className="authorhead">
                    <h4>{author.name}</h4>
                </div>
                <p className='bio'>{author.signature}</p>
            </div>
        </div>
    );
}